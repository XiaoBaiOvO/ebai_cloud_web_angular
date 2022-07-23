import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  projectList = [
    {
      id: 1,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      name: 'Alipay',
      desc: '那是一种内在的东西，他们到达不了，也无法触及的',
      group: '科学搬砖组',
      time: '15 小时前'
    }, {
      id: 2,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      name: 'Angular',
      desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      group: '全组都是吴彦祖',
      time: '3 年前'
    }, {
      id: 3,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      name: 'Ant Design',
      desc: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      group: '中二少女团',
      time: '15 小时前'
    }, {
      id: 4,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      name: 'Ant Design Pro',
      desc: '那时候我只会想自己想要什么，从不想自己拥有什么',
      group: '程序员日常',
      time: '3 年前'
    }, {
      id: 5,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      name: 'Bootstrap',
      desc: '凛冬将至',
      group: '高逼格设计天团',
      time: '3 年前'
    }, {
      id: 6,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      name: 'React',
      desc: '生命就像一盒巧克力，结果往往出人意料',
      group: '骗你来学计算机',
      time: '3 年前'
    },
  ];

  dynamicList = [
    {
      id: 1,
      type: 'createProject',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      user: '曲丽丽',
      group: '高逼格设计天团',
      project: '六月迭代',
      project_status: '',
      time: '15 小时前'
    }, {
      id: 2,
      type: 'createProject',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
      user: '付小小',
      group: '高逼格设计天团',
      project: '六月迭代',
      project_status: '',
      time: '15 小时前'
    }, {
      id: 3,
      type: 'createProject',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
      user: '林东东',
      group: '中二少女团',
      project: '六月迭代',
      project_status: '',
      time: '15 小时前'
    }, {
      id: 4,
      type: 'updateStatus',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
      user: '周星星',
      group: '',
      project: '5 月日常迭代',
      project_status: '已发布',
      time: '15 小时前'
    }, {
      id: 5,
      type: 'release',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
      user: '朱偏右',
      group: '工程效能',
      project: '留言',
      project_status: '',
      time: '15 小时前'
    }, {
      id: 6,
      type: 'createProject',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
      user: '乐哥',
      group: '程序员日常',
      project: '品牌迭代',
      project_status: '',
      time: '15 小时前'
    },
  ];
  linkList = [
    '操作一', '操作二', '操作三', '操作四', '操作五', '操作六',
  ];
  typeList = [
    { type: 'a', name: '个人', total: 10, checked: true, color: '#1890FF' },
    { type: 'b', name: '团队', total: 10, checked: true, color: '#FACC14' },
    { type: 'c', name: '部门', total: 10, checked: true, color: '#2FC25B' },
  ];
  teamList = [
    {
      id: 1,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      name: '科学搬砖组'
    },
    {
      id: 2,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      name: '全组都是吴彦祖'
    },
    {
      id: 3,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      name: '中二少女团'
    },
    {
      id: 4,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      name: '程序员日常'
    },
    {
      id: 5,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      name: '高逼格设计天团'
    },
    {
      id: 6,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      name: '骗你来学计算机'
    },
  ];





  titleTpl: any;
  descTpl: any;

  constructor() { }

  ngOnInit() {
  }

}

