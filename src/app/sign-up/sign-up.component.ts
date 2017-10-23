import { Component, OnInit } from '@angular/core';
import { StoreUserService } from '.././store-user.service';
import { Router} from '@angular/router';
import { User } from '.././user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title:string;
  message:string;
  user_id:number=1001;
  constructor(private _user: StoreUserService,private router:Router) {
  this.title="Signup";
  }
  onClickMe(name,email,phone,password,dob)
	{
  //  this.user_id=1001;
		var newUser:User={
      UserId:this.user_id,
			Name:name,
			Email:email,
			Mobile:phone,
			Password:password,
			Dob:dob
		}
    this.user_id++;
    this._user.addUser(newUser);
    this.message="Sign up Successfull "+name;
	}
  cancel()
  {
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }

}
