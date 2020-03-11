import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UserInterceptor} from './user/user.interceptor';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  providers: []

})
export class LandingModule { }
