import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import {Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    // private platformLocation: PlatformLocation,
    private router: Router,
    // private message: NzMessageService,
    // private iconService: NzIconService,
    // private commonS: CommonService,
    // @Inject(DOCUMENT) doc: any,
  ) {
    // this.iconService.addIconLiteral('number:10', number10IconLiteral);
    // this.iconService.addIconLiteral('number:11', number11IconLiteral);
    // this.iconService.addIconLiteral('number:12', number12IconLiteral);
    // this.doc = doc;
  }
  drawerInfo = {
    content: {
      header: true,
      footer: true,
      menu: true,
      menuHeader: true
    }
  };
  navigationInfo = {
    header: true,
    menu: true
  };
  siteStyle = 'light';

  isCollapsed = false;

  menuList = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
    },
    {
      title: 'Dashboard',
      icon: 'dashboard',
      open: false,
      children: [
        {
          title: '分析页',
          link: '/welcome'
        },
        {
          title: '监控页',
          link: '/dashboard/monitor'
        },
        {
          title: '工作台',
          link: '/dashboard/workplace'
        },
      ]
    },
    {
      title: '表单页',
      icon: 'form',
      open: false,
      children: [
        {
          title: '基本表单',
          link: '/form/basic-form'
        },
        {
          title: '分步表单',
          link: '/form/step-form'
        },
        {
          title: '高级表单',
          link: '/form/advanced-form'
        },
      ]
    },
    {
      title: '列表页',
      icon: 'table',
      open: false,
      children: [
        {
          title: '搜索列表',
          open: false,
          children: [
            {
              title: '搜索列表（文章）',
              link: '/list/search/articles'
            },
            {
              title: '搜索列表（项目）',
              link: '/list/search/projects'
            },
            {
              title: '搜索列表（应用）',
              link: '/list/search/applications'
            },
          ]
        },
        {
          title: '查询表格',
          link: '/list/table-list'
        },
        {
          title: '标准列表',
          link: '/list/basic-list'
        },
        {
          title: '卡片列表',
          link: '/list/card-list'
        },
      ]
    },
    {
      title: '详情页',
      icon: 'profile',
      open: false,
      children: [
        {
          title: '基础详情页',
          link: '/profile/basic'
        },
        {
          title: '高级详情页',
          link: '/profile/advanced'
        },
      ]
    },
    {
      title: '结果页',
      icon: 'check-circle',
      open: false,
      children: [
        {
          title: '成功页',
          link: '/result/success'
        },
        {
          title: '失败页',
          link: '/result/fail'
        },
      ]
    },
    {
      title: '异常页',
      icon: 'warning',
      open: false,
      children: [
        {
          title: '403',
          link: '/exception/403'
        },
        {
          title: '404',
          link: '/exception/404'
        },
        {
          title: '500',
          link: '/exception/500'
        },
      ]
    },
    {
      title: '个人页',
      icon: 'user',
      open: false,
      children: [
        {
          title: '个人中心',
          link: '/account/center'
        },
        {
          title: '个人设置',
          link: '/account/settings'
        },
      ]
    },
  ];

  changeCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    // this.commonS.changeLayout();
  }

  goUrl() {
    let url;
    this.router.navigate([url]).then(r => {});
  }

  logout() {
    this.router.navigate(['/user/login']).then(r => {});
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
