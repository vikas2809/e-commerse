import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { StoreUserService } from '.././store-user.service';
import { NavbarService } from '.././navbar.service';
import { User } from '.././user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
title:string;
  all_user:User[]=[];
	user:string;
	user_key:string;
  note:string;
	valid_user:any=[];
  constructor(private _user:StoreUserService,private router:Router,public nav:NavbarService) {
  this.title="Login";
  let user_info,local_length=localStorage.length;

	  	for(var i=0;i<local_length;i++)
	  	{
	  		this.user_key=localStorage.key(i);
	  		user_info=_user.getUserInfo(this.user_key);
	  		this.all_user.push(user_info);
	  	}
   }
   onAuthentication(entered_email,entered_password)
  	{
  		console.log(entered_email+" "+entered_password);
  		 this.valid_user= this.all_user.filter(function(user){
  			if(user.Email===entered_email && user.Password===entered_password)
  				return user;
  		})
      console.log(this.valid_user);
      if(this.valid_user.length>0)
      {
        this.nav.hide();
        this.router.navigate(['/dashboard',{id:this.valid_user[0].UserId}]);
      }
      if(this.valid_user.length<=0)
      {
          this.user="Invalid User!!! Please try again";
          this.note="Not a member yet!!! Please signup first";
      }
  	}
    cancel()
    {
      this.router.navigate(['home']);
    }
    // validUser()
  	// {
  	// 	console.log(this.valid_user);
  	// }

  ngOnInit() {
    // this.nav.hide();
  }

}
