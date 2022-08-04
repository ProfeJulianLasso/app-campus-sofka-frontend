// Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material

// Routing
import { AppRoutingModule } from './app-routing.module';

// Template
import { AppComponent } from './templates/main2022/main/app.component';

// Modules
import { MainModule } from './templates/main2022/main.module';

// Components

// Pages

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
