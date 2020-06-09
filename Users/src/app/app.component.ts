import { Component, OnInit } from '@angular/core';
import { SaveService } from './save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Users';

  registerData = {};
  constructor( private _Save: SaveService) { }

  ngOnInit() {

  }

  registerUser() {
    this._Save.registerUser(this.registerData)
    .subscribe(

      res => console.log(res),
      err => console.log(err)
    );
  }
  }


