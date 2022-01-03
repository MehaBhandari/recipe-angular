import { Component} from "@angular/core";

@Component({
    selector: 'child-component',
    template: `
      <div>
        <input type="text" [(ngModel)]="userName" /> <br /><br />
      </div>
    `
  })
  export class ChildComponent {
  
   public userName: string;
    
    updateUserName(): void {
      this.userName = "Mayank"
    }
  }