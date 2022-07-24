import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {CommonModule} from "@angular/common";
import {NzListModule} from "ng-zorro-antd/list";
import {NzButtonModule} from "ng-zorro-antd/button";
import {IconsProviderModule} from "../../icons-provider.module";
import {NzCommentModule} from "ng-zorro-antd/comment";
import {FormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  imports: [WelcomeRoutingModule, NzCardModule, NzLayoutModule, NzGridModule, NzBadgeModule, NzAvatarModule, CommonModule, NzListModule, NzButtonModule, IconsProviderModule, NzCommentModule, FormsModule, NzInputModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
