import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import {AddInfoComponent} from './add-info/add-info.component';

const routes: Routes = [{ path: '', component: AuthComponent },
  {path: 'addinfo', component: AddInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
