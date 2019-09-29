import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-authorise',
  templateUrl: './authorise.component.html',
  styleUrls: ['./authorise.component.scss']
})
export class AuthoriseComponent implements OnInit {
  /**
   *
   */
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.parseAccessToken();
  }
}
