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

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SecurityModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
