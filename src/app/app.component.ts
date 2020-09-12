import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Observable } from 'rxjs';
import {SpaceXApisService} from '../services/spacexApis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SpaceX Launch Programs';
  developerName = 'Meha Bhandari';
  getAllProjects: any = [];
  launchesData$ = null;
  sucessLaunchSelectedData$ = null;
  sucessLandingSelectedData$ = null;
  yearSelectedData$ = null;
  
  getLaunches$: Observable<any>;
  constructor(private spaceXApisService: SpaceXApisService) { }

  getAllYearsArray = [{
    year: 2006,
    isActive: false
  }, {
    year: 2007,
    isActive: false
  }, {
    year: 2008,
    isActive: false
  }, {
    year: 2009,
    isActive: false
  }, {
    year: 2010,
    isActive: false
  }, {
    year: 2011,
    isActive: false
  }, {
    year: 2012,
    isActive: false
  }, {
    year: 2013,
    isActive: false
  }, {
    year: 2014,
    isActive: false
  }, {
    year: 2015,
    isActive: false
  }, {
    year: 2016,
    isActive: false
  }, {
    year: 2017,
    isActive: false
  }, {
    year: 2018,
    isActive: false
  }, {
    year: 2019,
    isActive: false
  }, {
    year: 2020,
    isActive: false
  }
];

  booleanFIlter = [{
    filterName: 'True'
  }, {
    filterName: 'False'
  }] ;

  yearSelected(year) {
    alert(year);
    this.yearSelectedData$ = this.spaceXApisService.getYearData(year).subscribe((data) => {
      this.getAllProjects = data;
    });
  }

  sucessLaunchSelected(booleanVal) {
    alert(booleanVal);
    this.sucessLaunchSelectedData$ = this.spaceXApisService.getSucessfulLaunch(booleanVal).subscribe((data) => {
      this.getAllProjects = data;
    });
  }

  sucessLandingSelected(booleanVal) {
    this.sucessLandingSelectedData$ = this.spaceXApisService.getSucessLanding(booleanVal).subscribe((data) => {
      this.getAllProjects = data;
    });
  }

  getLaunches() {
    this.launchesData$ = this.spaceXApisService.getLaunches().subscribe((data) => {
      this.getAllProjects = data;
    });
  }

  ngOnInit() {
    this.getLaunches();
  }

  ngOnDestroy() {
    this.launchesData$.unsubscribe();
  }
}

