import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import {Customer} from './customer';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class StoreUserService {
	user_info:User[]=[];
  userId:number=1001;
  user_detail:any;
	user_id:any;
  constructor(private _http: Http) { }
  getProducts(): Observable<Customer[]> {
    return this._http
        .get('assets/product_detail/product.json')
        .map((response: Response) => <Customer[]> response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }
  getUserInfo(user_detail)
  {
  	 if (localStorage.getItem(user_detail) === null || localStorage.getItem(user_detail) === undefined) {
      return this.user_detail;
    }
    else {
      var user_info = JSON.parse(localStorage.getItem(user_detail));
      return user_info;
    }
  }
  addUser(newUser:User)
  {
    localStorage.setItem(this.userId.toString(), JSON.stringify(newUser));
      this.userId++;
  }
	updateUser(user_id,newUser:User)
	{
			localStorage.setItem(user_id,JSON.stringify(newUser));
	}
  }
