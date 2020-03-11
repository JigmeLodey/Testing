import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';

const routes: Routes = [{ path: '', component: CoreComponent, children: [
    {path: 'landing', loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule) },
    {path: '', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
