import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';

import {NzMessageService} from 'ng-zorro-antd/message';
import {AuthService} from "../../core/auth/auth.service";
import axios from "axios";

@Component({
    selector: 'app-user-login',
    templateUrl: './login.component.html',
    styleUrls: ['./user.component.scss']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    isSpinning = false;
    loginError = false;
    tabIndex = 0;
    mobileLoginError = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private message: NzMessageService,
        private authService: AuthService,

    ) {
        this.loginForm = this.fb.group({
            userName: ['xiaobai', [Validators.required]],
            password: ['111', [Validators.required]],
            mobile: ['', [Validators.required, this.matchMobile]],
            mail: ['', [Validators.required]],
            remember: [true]
        });
    }

    ngOnInit() {
    }

    matchMobile = (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value && !control.value.match(/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/)) {
            return {matchMobile: true};
        }
        return null;
    }

    selectedChange() {
        if (this.tabIndex) {
            const mobile = this.loginForm.controls['mobile'].value;
            const mail = this.loginForm.controls['mail'].value;
            this.loginForm.controls['mobile'].reset(mobile);
            this.loginForm.controls['mail'].reset(mail);
        } else {
            const username = this.loginForm.controls['userName'].value;
            const password = this.loginForm.controls['password'].value;
            this.loginForm.controls['userName'].reset(username);
            this.loginForm.controls['password'].reset(password);
        }
    }

    submitForm() {
        this.isSpinning = true;
        this.loginError = false;
        for (const i of ['userName', 'password']) {
            if (i) {
                this.loginForm.controls[i].markAsDirty();
                this.loginForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.loginForm.controls['userName'].invalid || this.loginForm.controls['password'].invalid) {
            this.isSpinning = false;
            return;
        }

        setTimeout(() => {
            const username = this.loginForm.controls['userName'].value;
            const password = this.loginForm.controls['password'].value;
            if (['admin', 'user'].indexOf(username) !== -1 && 'ng.antd.admin' === password) {
                this.router.navigate(['/']);
                this.message.success('登录成功');
            } else {
                this.loginError = true;
                this.isSpinning = false;
            }
        }, 1000);
    }

    submitFormMobile() {
        this.isSpinning = true;
        this.mobileLoginError = false;
        for (const i of ['mobile', 'mail']) {
            if (i) {
                this.loginForm.controls[i].markAsDirty();
                this.loginForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.loginForm.controls['mobile'].invalid || this.loginForm.controls['mail'].invalid) {
            this.isSpinning = false;
            return;
        }

        this.login();
    }

    logins() {
        setTimeout(() => {
            const mail = this.loginForm.controls['mail'].value;
            if (mail === '123456') {
                this.router.navigate(['/']);
                this.message.success('登录成功');
            } else {
                this.mobileLoginError = true;
                this.isSpinning = false;
            }
        }, 1000);
    }


    login() {
        this.isSpinning = true;
        this.loginError = false;

        if(this.tabIndex) {
            // mobile
            let userInfo = "abc123";
            this.authService.loginSuccess(userInfo);
            this.router.navigate(['/welcome']);
        } else {
            // userName
            if (this.loginForm.controls['userName'].invalid || this.loginForm.controls['password'].invalid) {
                // 输入错误
                this.isSpinning = false;
                this.loginError = true;
                return;
            }
            // 登录验证
            const userInfo = {
                userName: this.loginForm.controls['userName'].value,
                password: this.loginForm.controls['password'].value,
            };
            // userInfo.userName =
            axios.post("http://127.0.0.1:9000/login", userInfo).then(r => {
                if (r.data != "") {
                    // 登录成功
                    this.authService.loginSuccess(r.data);
                    this.router.navigate(['/welcome']).then();
                } else {
                    // 登录失败
                    this.isSpinning = false;
                    this.loginError = true;
                }
            })

        }
        this.isSpinning = false;
    }

    goRegister() {
        this.router.navigate(['/user/register']).then();
    }

}
