import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType:string ="default"
  sellerName=""
  constructor(private router: Router) { }


  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        console.log(val.url);
        if(localStorage.getItem("seller")&&val.url.includes("seller")){
          let sellerStore=localStorage.getItem('seller');
          let sellerData= sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.name;

          console.log("This is seller Area", this.sellerName)
          this.menuType="seller"
        }else{
          console.log("OutSide seller Area")
          this.menuType="default"
        }
      }
    })
  }
logOut(){
  localStorage.removeItem('seller');
  this.router.navigate(['/'])

}
}
