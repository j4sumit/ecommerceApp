import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';
import {Router} from '@angular/router'
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
showLogin=false;
authError:string=""
  constructor(private seller:SellerService, private router:Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: signUp) :void{
    console.log(data)
    this.seller.userSignUp(data)
    // .subscribe((result)=>{
    //   if(result){
    //     this.router.navigate(['seller-home'])
    //   }
    // })
    }
    login(data:signUp):void{
      this.seller.userLogin(data);
      this.seller.isLoginError.subscribe((isError)=>{
          if(isError){
            this.authError="Email or password is not correct"
          }
      })
    }

    openLogin(){
      this.showLogin=true;
    }
    openSignUp(){
      this.showLogin=false;
    }

}
