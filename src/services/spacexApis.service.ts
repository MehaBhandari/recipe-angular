import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SpaceXApisService {
    // URL used for first-time page load without any Filters:
    private readonly URL = 'https://api.spaceXdata.com/v3/launches?limit=100';
    private readonly URL2 = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=';
    private readonly URL3 = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=';
    private readonly URL4 = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=';
    
    constructor(private http: HttpClient) { }

    // this method returns list of all SpaceX projects
    getLaunches(): Observable<any> {
        console.log('Request is sent!');
        return this.http.get(this.URL);
    }
    getSucessfulLaunch(booleanVal) {
        return this.http.get(this.URL2 + booleanVal);
    }
    getSucessLanding(booleanVal) {
        return this.http.get(this.URL3 + booleanVal);
    }
    getYearData(year) {
        return this.http.get(this.URL4 + year);
    }
}
