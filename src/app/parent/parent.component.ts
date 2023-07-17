import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  Cmessage: string | undefined;
  itemImageUrl: string | undefined;
  isChanged: boolean | undefined;
  items:string[] = [];
  name:string | undefined;
  currentStyles : Record<string, string> = {}; 
  canSave : boolean | undefined;
  isUnchanged : boolean | undefined;
  isSpecial : boolean | undefined;

  constructor(){
    this.itemImageUrl = "../assets/images/images.png";
    this.canSave =this.isUnchanged= this.isSpecial = true;    
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  ClickonText (name: any) {
    this.isChanged = true;
    this.Cmessage = name;
  }

  addItem(value: string) {
    this.items.push(value);
  }
}
