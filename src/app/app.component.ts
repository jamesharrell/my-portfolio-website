import { Component, Inject, Injectable } from '@angular/core';
import { GITHUB_URL, TITLE, EMAIL, HOME_HEADER, HOME_BODY, RESUME_URL } from './constants';
import { PublicFeature } from '@angular/core/src/render3/definition';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(
    @Inject(GITHUB_URL) public github_url: string,
    @Inject(TITLE) public title: string,
    @Inject(EMAIL) public email: string,
    @Inject(HOME_HEADER) public home_header: string,
    @Inject(HOME_BODY) public home_body: string,
    @Inject(RESUME_URL) public resume_url: string
  ) {
  }
}
