import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 登陆状态
  isLoggedIn = false;
  // 保存登录后重定向的路径
  redirectUrl: string | undefined;

  loginSuccess(id: String): void {
      console.log('用户id：' + id)
    this.isLoggedIn = true;
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
