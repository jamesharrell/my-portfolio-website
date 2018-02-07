import { Component, OnInit } from '@angular/core';
import { GetProjectsService } from '../services/get-projects';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(private projectService: GetProjectsService) { }
  projects;
  name;
  ngOnInit() {

    this.projectService.getProjects().subscribe(
      responseCol => {
          this.projects = responseCol;
      });
  }

}
