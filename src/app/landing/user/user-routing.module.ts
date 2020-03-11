import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './user.component';
import {FeedsComponent} from './feeds/feeds.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactComponent} from './contact/contact.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {StoresComponent} from './features/stores/stores.component';
import {BookRollComponent} from './features/book-roll/book-roll.component';
import {DonateBooksComponent} from './features/donate-books/donate-books.component';
import {GiveAwayComponent} from './features/give-away/give-away.component';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    {path: '', component: FeedsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'userProfile', component: UserProfileComponent},
    {path: 'store', component: StoresComponent},
    {path: 'roll', component: BookRollComponent},
    {path: 'dbook', component: DonateBooksComponent},
    {path: 'give', component: GiveAwayComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
