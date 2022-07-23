import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   const url: string = state.url; // 将要跳转的路径
    //   return this.checkLogin(url);
    // }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
        const url: string = state.url; // 将要跳转的路径
        return this.checkLogin(url);
    }

    private checkLogin(url: string): true | UrlTree {
        // 已经登录，直接返回true
        if (this.authService.isLoggedIn) {
            return true;
        }
        // 修改登陆后重定向的地址
        this.authService.redirectUrl = url;
        // 重定向到登录页面
        return this.router.parseUrl('/user');
    }

}
