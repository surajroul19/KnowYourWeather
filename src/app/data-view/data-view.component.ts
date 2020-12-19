import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  tableValue:any;
  cityName;
  dataUnavailable=false;

  constructor(private readonly helperService:HelperService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  getDetails(){
    this.tableValue=null;
    this.dataUnavailable=null;
    this.spinner.show();
    this.helperService.getDetailsByCityName(this.cityName).subscribe(requiredData=>{
      this.tableValue=requiredData;
      this.spinner.hide();
      this.dataUnavailable=false;
    },error=>{
      this.spinner.hide();
      this.dataUnavailable=true;
    })
  }
}
