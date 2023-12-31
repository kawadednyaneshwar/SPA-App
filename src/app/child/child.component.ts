import { Component, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})


export class ChildComponent {
  @Input()
  message:string | undefined;
  @Output() newItemEvent  = new EventEmitter();

  clickOnText(item: string){
      this.newItemEvent.emit(item);
  }
}
