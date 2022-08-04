// Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material

// Routing
import { AppRoutingModule } from './app-routing.module';

// Template
import { AppComponent } from './templates/main2022/main/app.component';

// Components
import { MenuComponent } from './templates/main2022/menu/menu.component';
import { HeaderComponent } from './templates/main2022/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
