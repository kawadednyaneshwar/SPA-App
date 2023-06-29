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

  constructor(){
    this.itemImageUrl = "../assets/images/images.png";
  }

  ClickonText (name: any) {
    this.isChanged = true;
    this.Cmessage = name;
  }

  addItem(value: string) {
    this.items.push(value);
  }
}
