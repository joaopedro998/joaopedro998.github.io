import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from './services/project.service';
import { Project } from './models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private projectService = inject(ProjectService);
  projects$!: Observable<Project[]>;

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
  }
}