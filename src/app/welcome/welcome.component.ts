import { Component, OnInit } from '@angular/core';
import { NavbarService } from '.././navbar.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title:string;
  constructor(public nav:NavbarService) {
    this.title="Welcome to E-store";
    this.nav.show();
   }

  ngOnInit() {
  }

}
