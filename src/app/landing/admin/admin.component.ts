import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AdminComponent implements OnInit {
  showToolBar: false;
  enableSide = false;

  constructor() { }

  ngOnInit() {
  }

  menus(enable: string) {
      this.enableSide = enable === 'enable';
  }
}
