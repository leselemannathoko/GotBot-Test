import { Component, OnInit } from '@angular/core';
import { SaveService } from './save.service';
import { User } from './models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Users';
  users: User[];
  selecteduser: User;
  userData: User;

  constructor( private saveService: SaveService) {
    this.userData = new User();

  }

  ngOnInit() {
   this.loadUsers();
  }

postUsers() {
  /*if (this.userData._id == '') {*/
    this.saveService.registerUser(this.userData).subscribe((user: User) => {
      this.loadUsers();
    });
  /*}*/
  /* else {
    this.saveService.updateUser(this.userData).subscribe((user: User) => {
      this.loadUsers();
    });
  }*/
  }

updateUsers() {
  this.saveService.updateUser(this.userData).subscribe((user: User) => {
    this.loadUsers();
  });

}

loadUsers() {
    this.saveService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      console.error();
    });
  }

updateUser(person: User) {
  this.userData = person;
}

}

