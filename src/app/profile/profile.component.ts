import { Component, OnInit } from '@angular/core';
import { StoreUserService } from '.././store-user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string;
  user_name:string;
  user_email:string;
  user_phone:string;
  user_password:string;
  user_dob:string;
  welcome:string;
  showUser:any=[];
  constructor(private _user:StoreUserService,private router: Router,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
            this.name = params['id'];
  });
  this.showUser=_user.getUserInfo(this.name);
  this.welcome="Welcome "+this.showUser.Name;
  this.user_name=this.showUser.Name;
  this.user_email=this.showUser.Email;
  this.user_phone=this.showUser.Mobile;
  this.user_password=this.showUser.Password;
  this.user_dob=this.showUser.Dob;
  console.log(this.showUser);
  }
  back()
  {
    this.router.navigate(['/dashboard',{id:this.name}]);
  }
  ngOnInit() {
  }

}
