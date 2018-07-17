import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpStatusModule } from 'http-status-pipe';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { AuthModule } from './apps/auth/auth.module';
import { AuthGuardService } from './apps/auth/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'auth',
        loadChildren: './apps/auth-view/auth-view.module#AuthViewModule'
    },
    {
        path: 'secure',
        loadChildren: './apps/secure/secure.module#SecureModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'error/:status_code',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpStatusModule,
        AuthModule.forRoot({
            login_url: environment.login_url,
            me_url: environment.me_url,
            secure_path: environment.secure_path
        }),
        HttpClientModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
