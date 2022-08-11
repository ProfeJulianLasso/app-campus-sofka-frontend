// Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Material
import { MatDialogModule } from '@angular/material/dialog';
// Routing
import { AppRoutingModule } from './app-routing.module';

// Template
import { AppComponent } from './templates/main2022/components/main/app.component';

// Modules
import { MainModule } from './templates/main2022/main.module';
import { SecurityModule } from './modules/security/security.module';

// Components

// Pages

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SecurityModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  exports: [MainModule, MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }