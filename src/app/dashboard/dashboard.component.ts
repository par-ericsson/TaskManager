import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {
    this.Designation = '';
    this.Username = '';
    this.NoOfTeamMembers = 0;
    this.TotalCostOfAllProjects = 0;
    this.PendingTasks = 0;
    this.UpComingProjects = 0;
    this.ProjectCost = 0;
    this.CurrentExpenditure = 0;
    this.AvailableFunds = 0;
  }
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'John Doe';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
  }

}
