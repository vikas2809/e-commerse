import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { StoreUserService } from '.././store-user.service';
import { NavbarService } from '.././navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name:string;
  welcome:string;
  input_id:any;
  showUser:any=[];
  productDetails:Customer[];
  errorMessage: string;
  constructor(private _user:StoreUserService,private router: Router,private route: ActivatedRoute,public nav:NavbarService) {
    this.route.params.subscribe(params => {
            this.name = params['id'];
  });
    this.showUser=_user.getUserInfo(this.name);
    this.welcome="Welcome "+this.showUser.Name;
    this.input_id=this.showUser.UserId;
    console.log(this.input_id);
}
ngOnInit() {
  this.getProductDetails();
  // this.nav.toggle();
 // this.nav.hide();
}
getProductDetails() {
  this._user.getProducts()
    .subscribe(
      productDetails => this.productDetails = productDetails,
      error => this.errorMessage = <any>error
    );
}
}
