import { Component, OnInit } from '@angular/core';
import { SaveService } from './save.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Users';
  users: User[];
  userData: User;

  registerData = {};
  constructor( private saveService: SaveService) {
  }

  ngOnInit() {
   this.loadUsers();
   this.userData = new User();
  }

registerUsers() {
    // tslint:disable-next-line: no-shadowed-variable
    this.saveService.registerUser(this.userData).subscribe((user: User) => {
    });
  }
    loadUsers() {
    this.saveService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      console.error();
    });


// updateUser(user: User) {
//   this.saveService.updateUser(user).subscribe((res) => {
//   this.user = new User();
//   });

}

}
