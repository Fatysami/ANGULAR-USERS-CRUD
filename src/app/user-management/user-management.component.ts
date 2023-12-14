import { Component,OnInit  } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit  {
  totalUsers: number = 0;
  totalPages: number | undefined;
  perPage: number = 6; // Nombre d'utilisateurs par page
  currentPage = 1;
  users: any[] = [];
 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers(this.currentPage);
  }
  loadUsers(page: number) {
    this.userService.getUsers(page, this.perPage).subscribe(
      response => {
        this.users = response.data;
        this.totalPages = response.total_pages; 
        this.totalUsers = response.total;
      },
      error => {
        console.error(error);
      }
    );
  }

  goToPage(event: MouseEvent,page: number) {
    event.preventDefault(); // Empêche le lien de naviguer vers l'URL `#`
    this.currentPage = page;
    this.loadUsers(page);
  }

  updateUser(user: any) {
    // TODO: Logique pour la mise à jour de l'utilisateur
  }

  deleteUser(userId: number) {
    // TODO: Logique pour la suppression de l'utilisateur
  }
}
