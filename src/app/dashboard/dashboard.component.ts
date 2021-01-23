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
    this.Clients = [];
    this.Projects = [];
    this.TeamMembersSummary = [];
    this.TeamMembers = [];
    this.ToDay = new Date();
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
  ToDay: Date;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'John Doe';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();

    this.Clients = [
      "Infotech Ltd.", "Acme Software Solutions", "Eidelund Industries"
    ];

    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ];

    for(let i = 2021; i >= 2011; i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      { Region: "West", TeamMembersCount: 25, TemporarilyUnavailableMembers: 8},
      { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1},
      { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6}
    ];

    this.TeamMembers = [
      {
        Region: "East", Members: [
          {ID: 1, Name: "Ford", Status: "Available"},
          {ID: 2, Name: "Miller", Status: "Available"},
          {ID: 3, Name: "Jones", Status: "Busy"},
          {ID: 4, Name: "James", Status: "Busy"}
        ]
      },
      {
        Region: "West", Members: [
          {ID: 5, Name: "Anna", Status: "Available"},
          {ID: 6, Name: "Elin", Status: "Available"},
          {ID: 7, Name: "Jonas", Status: "Busy"},
          {ID: 8, Name: "Joe", Status: "Busy"}
        ]
      },
      {
        Region: "South", Members: [
          {ID: 9, Name: "Anders", Status: "Available"},
          {ID: 10, Name: "Joakim", Status: "Available"},
          {ID: 11, Name: "Sharon", Status: "Busy"},
          {ID: 12, Name: "David", Status: "Busy"}
        ]
      },
      {
        Region: "North", Members: [
          {ID: 13, Name: "Susan", Status: "Available"},
          {ID: 14, Name: "Tim", Status: "Available"},
          {ID: 15, Name: "Jennie", Status: "Busy"},
          {ID: 16, Name: "Alexandra", Status: "Busy"}
        ]
      },
    ];
  }

  onProjectChange($event: any){
    console.log($event.target.innerHTML);
    if ($event.target.innerHTML == 'Project A') {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;

    } else if ($event.target.innerHTML == 'Project B') {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 22450;
      this.AvailableFunds = 2640;

    } else if ($event.target.innerHTML == 'Project C') {
      this.ProjectCost = 662183;
      this.CurrentExpenditure = 7721;
      this.AvailableFunds = 9811;
      
    } else if ($event.target.innerHTML == 'Project D') {
      this.ProjectCost = 928431;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }

}
