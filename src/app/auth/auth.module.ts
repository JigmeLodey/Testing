import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {NotifierModule} from 'angular-notifier';
import { AddInfoComponent } from './add-info/add-info.component';

@NgModule({
  declarations: [AuthComponent, AddInfoComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FlexModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatRippleModule,
        MatButtonModule,
        ExtendedModule,
        NotifierModule
    ],
  providers: []
})
export class AuthModule { }
