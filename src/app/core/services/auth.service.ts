import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth0: auth0.WebAuth;
  private authOptions: auth0.AuthOptions;

  constructor() {

    // Set-up the authentication options for our flow
    this.authOptions = {
      domain: 'dev-ic36ukxx.auth0.com',
      clientID: 'LUP9PZrI7qnTp6H3uJQmi070o4pE8t7q'
    };

    // Set-up the authentication flow
    this.auth0 = new auth0.WebAuth(this.authOptions);
  }

  public authorize() {
    this.auth0.authorize({
      redirectUri: 'http://localhost:4300/authorise',
      responseType: 'token id_token'
    });
  }

  public parseAccessToken() {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
    });
  }
}
