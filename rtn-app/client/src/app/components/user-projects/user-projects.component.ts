import { Component, Input, OnInit } from '@angular/core';
import { UserProjectsService } from './user-projects.service';
import { ProfileService } from '../../services/profile/profile.service';
import { Subscription } from 'rxjs/Subscription';
import { ModalTrelloLikeService } from '../../services/modal-trello-like/modal-trello-like.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {
  projects: any = [];
  isUserLogged: boolean;
  @Input() user: any;
  projectToAddSavedSubscription: Subscription;

  constructor(
    private userProjectService: UserProjectsService,
    private modalTrelloLikeService: ModalTrelloLikeService
  ) { }

  ngOnInit() {
    this.subscribeToProjectAddSaved();
    this.userProjectService.getUserProjects(this.user.uid)
      .subscribe(projects => this.projects = projects);
    this.isUserLogged = this.isUserLoggedIn();
  }

  isUserLoggedIn(): boolean {
    const token = ProfileService.getCurrentUserToken();
    if (token) {
      return ProfileService.getCurrentUserToken().username === this.user.username;
    }
    return false;
  }

  subscribeToProjectAddSaved() {
    this.projectToAddSavedSubscription = this.modalTrelloLikeService
      .getProjectToAddSaved().subscribe(project => {
        this.projects.push(project);
      });
  }

}
