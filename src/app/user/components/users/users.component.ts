import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input()
  users: any[];

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value);
  }

}
