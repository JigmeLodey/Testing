import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexModule} from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserInterceptor} from './landing/user/user.interceptor';
import { NotifierModule } from 'angular-notifier';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexModule,
    HttpClientModule,
    NotifierModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcV1BjXK8AwiO8dheFqsOs3eWdBEwSR5o'
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
