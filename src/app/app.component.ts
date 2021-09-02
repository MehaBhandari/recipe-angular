import { Component, OnInit, OnDestroy, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Recipe';
  developerName = 'Meha Bhandari';
  
  ngOnInit() {
  }

  ngOnDestroy() {
  }
}

