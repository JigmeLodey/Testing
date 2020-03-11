import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AdminComponent implements OnInit {
  showToolBar: false;
  enableSide = false;

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  menus(enable: string) {
    this.enableSide = enable === 'enable';
  }

  signOut() {
    debugger
    localStorage.clear();
    this.route.navigate(['/auth']);
  }
}
