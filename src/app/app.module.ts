import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SettingsComponent } from './features/profile/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
