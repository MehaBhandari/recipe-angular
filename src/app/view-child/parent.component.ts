import { Component, ViewChild} from "@angular/core";

@Component({
    selector: 'parent-component',
    template: `
      <div>
        <b>This is the Parent Component Accessing Child Component</b>
        <child-component #userInformation></child-component>
        <input type="button" value="Update User Name" (click)="updateUserData()" />
      </div>
    `
  })
  export class ParentComponent {
    @ViewChild("userInformation", {read:true, static:false}) childComponentReference: any;
    
    updateUserData() {
      
      // Accessing Property of Child Component
      this.childComponentReference.userName = "Updated Name";
      
      // Accessing Functions of Child Component
      this.childComponentReference.updateUserName();
    }
  }