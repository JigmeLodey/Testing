import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [{path: '', component: AppComponent, children: [
    {path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    {path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
