import { Component } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goDigit';
  name;
  nameAgeDetails;
  buttonClassFlag:boolean;
  constructor(private readonly helperService:HelperService){

  }



}
