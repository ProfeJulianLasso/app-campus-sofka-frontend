// Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
// Material

// Routing
import { AppRoutingModule } from './app-routing.module';

// Template
import { AppComponent } from './templates/main2022/components/main/app.component';

// Modules
import { MainModule } from './templates/main2022/main.module';
import { IndexComponent } from './pages/index/index.component';
import { SecurityModule } from './modules/security/security.module';

// Components

// Pages

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SecurityModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
