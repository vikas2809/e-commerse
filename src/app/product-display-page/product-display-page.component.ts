import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-display-page',
  templateUrl: './product-display-page.component.html',
  styleUrls: ['./product-display-page.component.css']
})
export class ProductDisplayPageComponent implements OnInit {
  product_id:string;
  product_img:string;
  product_price:number;
  pro_user_id:string;
  product_sell_price:string;
  product_discount:string;
  product_category:string;
  product_quantity:string;
  constructor(private router: Router,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.pro_user_id= params['userId'];
      this.product_id = params['id'];
      this.product_img = params['img'];
      this.product_price = +params['product_price'];
      this.product_sell_price = params['sell'];
      this.product_discount = params['off'];
      this.product_category = params['group'];
      this.product_quantity = params['amount'];
   });
  }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['\dashboard',{id:this.pro_user_id}]);
  }
}
