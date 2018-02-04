import { Component, Inject, Injectable } from '@angular/core';
import { GITHUB_URL, TITLE, EMAIL } from './constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(
    @Inject(GITHUB_URL) private github_url: string,
    @Inject(TITLE) private title: string,
    @Inject(EMAIL) private email: string
  ) {
  }
}
