import { Component,OnInit  } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit  {

 users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data.data;
      },
      error => {
        console.error(error);
      }
    );
  }
  updateUser(user: any) {
    // Logique pour la mise à jour de l'utilisateur
  }

  deleteUser(userId: number) {
    // Logique pour la suppression de l'utilisateur
  }
}
