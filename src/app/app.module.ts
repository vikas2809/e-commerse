import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StoreUserService } from './store-user.service';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SettingComponent } from './setting/setting.component';
import { ProductDisplayPageComponent } from './product-display-page/product-display-page.component';
import { NavbarService } from './navbar.service';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    LogInComponent,
    FooterComponent,
    DashboardComponent,
    SideBarComponent,
    ProfileComponent,
    EditProfileComponent,
    SettingComponent,
    ProductDisplayPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [StoreUserService,NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
