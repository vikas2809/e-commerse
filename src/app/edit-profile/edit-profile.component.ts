import { Component, OnInit } from '@angular/core';
import { StoreUserService } from '.././store-user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '.././user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  update_msg:string;
  user_id:string;
  user_name:string;
  user_email:string;
  user_phone:string;
  user_password:string;
  user_dob:string;
  showUser:any=[];
  constructor(private _user:StoreUserService,private router: Router,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
            this.user_id = params['id'];
  });
  this.showUser=_user.getUserInfo(this.user_id);
  this.user_name=this.showUser.Name;
  this.user_email=this.showUser.Email;
  this.user_phone=this.showUser.Mobile;
  this.user_password=this.showUser.Password;
  this.user_dob=this.showUser.Dob;
  console.log(this.showUser);
  console.log(this.user_id);
  }
  onClickMe(user_name,user_email,user_phone,user_password,user_dob)
  {
    console.log(user_name+" "+user_email+" "+user_phone+" "+user_password+" "+user_dob);
    var newUser:User={
      UserId:parseInt(this.user_id),
			Name:user_name,
			Email:user_email,
			Mobile:user_phone,
			Password:user_password,
			Dob:user_dob
		}
    console.log(this.user_id);
    this._user.updateUser(this.user_id,newUser);
    this.update_msg="Updated Successfully";
  }
  cancel()
  {
      this.router.navigate(['/dashboard',{id:this.user_id}]);
  }
  ngOnInit() {
  }

}
