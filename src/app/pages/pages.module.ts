import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzDividerModule} from 'ng-zorro-antd/divider';

import {AuthGuard} from '../service/auth-guard.service';
import {CommonService} from '../service/common.service';

import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {AuthModule} from "../auth/auth.module";


@NgModule({
    declarations: [
        PagesComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [
        AuthModule,
        CommonModule,
        FormsModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzCardModule,
        NzTimelineModule,
        NzInputModule,
        NzAutocompleteModule,
        NzToolTipModule,
        NzBadgeModule,
        NzAvatarModule,
        NzDropDownModule,
        NzTabsModule,
        NzListModule,
        NzEmptyModule,
        NzMessageModule,
        NzTagModule,
        NzDrawerModule,
        NzSwitchModule,
        NzDividerModule,
        PagesRoutingModule,
        NzBreadCrumbModule,
        NzCarouselModule
    ],
    providers: [
        AuthGuard,
        CommonService
    ]
})

export class PagesModule {

}
