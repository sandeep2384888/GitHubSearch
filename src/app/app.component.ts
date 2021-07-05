import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';
  keyword="";
  keyworddata="";
  items:any;
  show:any;
  totalLength:any;
  page:number=1;
  showpost:any=[];

  constructor(private http:HttpClient){}
 

  onClick(value:any){
    this.keyword=value;
    console.log(this.keyword);
    this.getRepositoryData().subscribe(data=>{
      console.log("sandeep");
      console.log(data.items);
      this.showpost=data.items;
      this.items=data.items;
      this.totalLength=data.items.length;;
      })
    }
    







  getRepositoryData(){
    let url=`https://api.github.com/search/repositories?q=${this.keyword}`;
     return this.http.get<any>(url);
  }
}
