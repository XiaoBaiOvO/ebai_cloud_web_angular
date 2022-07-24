import {Component, OnInit, Inject, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {AuthService} from "../core/auth/auth.service";
import axios from "axios";

@Component({
    selector: 'app-root',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, AfterViewInit {

    constructor(
        // private platformLocation: PlatformLocation,
        private router: Router,
        private authService: AuthService,
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
            title: '',
            icon: '',
            link: '',
        },
        {
            title: '',
            icon: '',
            open: false,
            children: [
                {
                    title: '',
                    open: false,
                    children: [
                        {
                            title: '',
                            link: ''
                        },
                    ]
                },
                {
                    title: '',
                    link: ''
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
        this.router.navigate([url]).then(r => {
        });
    }

    logout() {
        this.authService.isLoggedIn = false;
        this.router.navigate(['/user']).then(r => {
        });
    }

    ngAfterViewInit(): void {
    }

    ngOnInit(): void {
        // 获取菜单列表
        axios.get("http://127.0.0.1:9000/getMenuList").then(r => {
            this.menuList = r.data
        })
    }

    // menuList = [
    //     {
    //         title: '首页',
    //         icon: 'home',
    //         link: '/welcome',
    //     },
    //     {
    //         title: '菜单一',
    //         icon: 'profile',
    //         open: false,
    //         children: [
    //             {
    //                 title: '目录1',
    //                 open: false,
    //                 children: [
    //                     {
    //                         title: '页面1',
    //                         link: '/11'
    //                     },
    //                     {
    //                         title: '页面2',
    //                         link: '/12'
    //                     },
    //                 ]
    //             },
    //             {
    //                 title: '目录2',
    //                 open: false,
    //                 children: [
    //                     {
    //                         title: '页面1',
    //                         link: '/21'
    //                     },
    //                     {
    //                         title: '页面2',
    //                         link: '/22'
    //                     },
    //                 ]
    //             },
    //             {
    //                 title: '页面1',
    //                 link: '/welcome2'
    //             },
    //             {
    //                 title: '页面2',
    //                 link: '/2'
    //             },
    //         ]
    //     },
    //     {
    //         title: '菜单二',
    //         icon: 'profile',
    //         open: false,
    //         children: [
    //             {
    //                 title: '目录1',
    //                 open: false,
    //                 children: [
    //                     {
    //                         title: '页面1',
    //                         link: '/11'
    //                     },
    //                     {
    //                         title: '页面2',
    //                         link: '/12'
    //                     },
    //                 ]
    //             },
    //             {
    //                 title: '目录2',
    //                 open: false,
    //                 children: [
    //                     {
    //                         title: '页面1',
    //                         link: '/21'
    //                     },
    //                     {
    //                         title: '页面2',
    //                         link: '/22'
    //                     },
    //                 ]
    //             },
    //             {
    //                 title: '页面1',
    //                 link: '/1'
    //             },
    //             {
    //                 title: '页面2',
    //                 link: '/2'
    //             },
    //         ]
    //     },
    //     {
    //         title: '菜单三',
    //         icon: 'profile',
    //         open: false,
    //         children: [
    //             {
    //                 title: '目录1',
    //                 open: false,
    //                 children: [
    //                     {
    //                         title: '页面1',
    //                         link: '/11'
    //                     },
    //                     {
    //                         title: '页面2',
    //                         link: '/12'
    //                     },
    //                 ]
    //             },
    //             {
    //                 title: '目录2',
    //                 open: false,
    //                 children: [
    //                     {
    //                         title: '页面1',
    //                         link: '/21'
    //                     },
    //                     {
    //                         title: '页面2',
    //                         link: '/22'
    //                     },
    //                 ]
    //             },
    //             {
    //                 title: '页面1',
    //                 link: '/1'
    //             },
    //             {
    //                 title: '页面2',
    //                 link: '/2'
    //             },
    //         ]
    //     },
    // ];

}
