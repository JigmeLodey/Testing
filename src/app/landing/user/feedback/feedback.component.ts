import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {UserService} from '../services/user.service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback: FormGroup;
  private readonly notifier: NotifierService;
  show = false;
  counter: any;
  currentValue = 0;

  constructor(private fb: FormBuilder, private service: UserService, private notificationService: NotifierService) {
    this.notifier = notificationService;
  }

  ngOnInit() {
    this.formBinding();
    this.slider();
  }

  formBinding() {
    this.feedback = this.fb.group({
      suggestion: [undefined, Validators.required],
      improve: [undefined, Validators.required],
      OFBack: [undefined, Validators.required]
    });
  }

  slider() {
    this.counter = setInterval(() => {
      this.currentValue += 1;
      this.show = this.currentValue % 2 === 0;
        }, 9000);
  }

  onSend(): void {
    if (this.feedback.valid) {
      this.service.postFeedback(this.feedback.value).subscribe(respond => {
        if (respond) {
          this.notifier.notify('success', 'Feedback Sent');
          this.feedback.reset();
        } else {
          this.notifier.notify('error', 'failed to send');
        }
      });
    } else {
      this.notifier.notify('error', 'Please send valid message');
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.counter);
  }
}
