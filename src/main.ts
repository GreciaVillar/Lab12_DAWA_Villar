import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Asegúrate de importar AppComponent correctamente
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { TravelsComponent } from './app/travels/travels.component';
import { BlogComponent } from './app/blog/blog.component';
import { ContactComponent } from './app/contact/contact.component';
import { ProfileComponent } from './app/profile/profile.component';
import { AuthGuard } from './app/auth.guard';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { AuthService } from './app/auth.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './app/login/login.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'travels', component: TravelsComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]),
    AuthService,
    AuthGuard
  ]
});