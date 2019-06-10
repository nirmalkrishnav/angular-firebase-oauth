import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private authservice: AuthService) {
    this.authservice.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }
  logout() {
    this.authservice.signOut();
  }

}
