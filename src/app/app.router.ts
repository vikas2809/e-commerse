import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SettingComponent } from './setting/setting.component';
import { AppComponent } from './app.component';
import { ProductDisplayPageComponent } from './product-display-page/product-display-page.component';

export const router: Routes = [
 { path: '', component: WelcomeComponent },
 { path: 'product_detail',component: ProductDisplayPageComponent},
 { path: 'settings', component:SettingComponent},
 { path: 'logout', component: WelcomeComponent},
 { path: 'profile', component: ProfileComponent},
 { path: 'edit_profile', component: EditProfileComponent},
 { path: 'home', component: WelcomeComponent},
 { path: 'sign', component: SignUpComponent},
 { path: 'log', component: LogInComponent},
 { path: 'dashboard', component: DashboardComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
