import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DatePipePipe } from './date-pipe.pipe';
import { ShowDataComponent } from './show-data/show-data.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { GetProductsService } from './Services/get-products.service';
import { BetterproductserviceService } from './Services/betterproductservice.service';
import { LoginComponent } from './login/login.component';
import { FirstComponent } from './about/first/first.component';
import { SecondComponent } from './about/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DatePipePipe,
    ShowDataComponent,
    LoginComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [HttpClient,{provide:BetterproductserviceService,useClass:BetterproductserviceService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
