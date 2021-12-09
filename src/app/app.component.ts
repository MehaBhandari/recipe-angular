import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Recipe';
  developerName = 'Meha Bhandari';
  
  ngOnInit() {
    of(['Apple','Banana', 'Orange']).subscribe(
      (item)=>{ console.log(`Available fruits are: ${item}`)},
      (err)=>{ console.log(`Error message is: ${err}`)}
    );
  }

  ngOnDestroy() {
  }
}

