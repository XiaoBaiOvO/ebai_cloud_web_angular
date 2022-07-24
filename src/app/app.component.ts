import {Component} from '@angular/core';
import axios from "axios";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {AuthService} from "./core/auth/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    constructor(
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        // 登录验证
        axios.post("http://127.0.0.1:9000/loggedCheck").then(r => {
            // console.log(r.data)
        })
    }


}
