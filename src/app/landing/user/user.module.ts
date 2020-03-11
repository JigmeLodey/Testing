import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {ProfileComponent} from './profile/profile.component';
import {FeedsComponent} from './feeds/feeds.component';
import {
  _MatMenuDirectivesModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {} from 'googlemaps';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NotifierModule} from 'angular-notifier';
import { AgmCoreModule } from '@agm/core';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { BookRollComponent } from './features/book-roll/book-roll.component';
import { DonateBooksComponent } from './features/donate-books/donate-books.component';
import { GiveAwayComponent } from './features/give-away/give-away.component';
import { StoresComponent } from './features/stores/stores.component';


@NgModule({
  declarations: [UserComponent, ProfileComponent, FeedsComponent, ContactComponent, FeedbackComponent, UserProfileComponent, BookRollComponent, DonateBooksComponent, GiveAwayComponent, StoresComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatSidenavModule,
        MatButtonModule,
        FlexModule,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        _MatMenuDirectivesModule,
        MatMenuModule,
        MatExpansionModule,
        ReactiveFormsModule,
        NotifierModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAcV1BjXK8AwiO8dheFqsOs3eWdBEwSR5o'
      })
    ],
})
export class UserModule {
}
