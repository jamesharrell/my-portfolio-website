import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { GITHUB_URL, TITLE, EMAIL, HOME_HEADER, HOME_BODY, RESUME_URL } from '../constants';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Inject(GITHUB_URL) public github_url: string,
    @Inject(TITLE) public title: string,
    @Inject(EMAIL) public email: string,
    @Inject(HOME_HEADER) public home_header: string,
    @Inject(HOME_BODY) public home_body: string,
    @Inject(RESUME_URL) public resume_url: string)  { }

  ngOnInit() {
  }

}
