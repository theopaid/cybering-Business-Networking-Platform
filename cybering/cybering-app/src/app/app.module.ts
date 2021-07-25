import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './welcome_page/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome_page/welcome-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullSignInComponent } from './welcome_page/full-sign-in/full-sign-in.component';
import { ForgotPasswordComponent } from './welcome_page/forgot-password/forgot-password.component';
import { SignInService } from 'src/service/sign-in-service/sign-in.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PageNotFoundComponent,
    WelcomePageComponent,
    FullSignInComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }