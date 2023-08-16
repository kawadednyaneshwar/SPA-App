import { Component, OnInit } from '@angular/core';
import { BetterproductserviceService } from '../Services/betterproductservice.service';
import { product } from '../HelperClasses/product';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Cmessage: string | undefined;
  itemImageUrl: string | undefined;
  isChanged: boolean | undefined;
  items:string[] = [];
  name:string | undefined;
  currentStyles : Record<string, string> = {}; 
  canSave : boolean | undefined;
  isUnchanged : boolean | undefined;
  isSpecial : boolean | undefined;
  products: product[] | undefined;

  constructor(private getProductsService: BetterproductserviceService){
    this.itemImageUrl = "../assets/images/images.png";
    this.canSave =this.isUnchanged= this.isSpecial = true;
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
    console.log("constructor");
  }

  ClickonText (name: any) {
    this.isChanged = true;
    this.Cmessage = name;
  }

  addItem(value: string) {
    this.items.push(value);
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ngOnInit");

    this.products = this.getProductsService.getProducts();
  }

  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   console.log("ngDoCheck");
  // }

  // ngAfterContentInit(): void {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked(): void {
  //   //Called after every check of the component's or directive's content.
  //   //Add 'implements AfterContentChecked' to the class.
  //   console.log("AfterContentChecked");
  // }

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   console.log("AfterViewInit");
  // }

  // ngAfterViewChecked(): void {
  //   //Called after every check of the component's view. Applies to components only.
  //   //Add 'implements AfterViewChecked' to the class.
  //   console.log("AfterViewChecked");
  // }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   console.log("OnDestroy");
  // }
}
