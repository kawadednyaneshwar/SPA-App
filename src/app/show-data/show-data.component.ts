import { Component } from '@angular/core';
import { GetDataService } from 'src/Services/get-data.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {
  IssueData : any;
  constructor(private httpclient : GetDataService){
  }

  ngOnInit(): void {

  }

  ClickonText(){
    this.httpclient.LoadIssue()
      .subscribe((data : any) => {
        this.IssueData = data;
        console.log(data);
    });
  }
}
