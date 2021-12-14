import { Component} from '@angular/core';
import { from, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe';
  developerName = 'Meha Bhandari';  
  
  ngOnInit() {
    this.createObservableStreamInConsole();
    
  }

  createObservableStreamInConsole() {
    of('Apple','Banana', 'Orange').subscribe(
      (item)=>{ console.log(`Available fruits are: ${item}`)},
      (err)=>{ console.log(`Error message is: ${err}`)},
      () => {console.log("Complete...")}
    );

    from([1,2,3,4,5,6,7,8])
    .pipe(
      map(item => item*2)
    ).subscribe(
      (item)=>console.log(`Item is: ${item}`)
    )
  }  
}

