// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatToolbarModule
  ],
  providers: [],
  exports: [HeaderComponent, MenuComponent]
})
export class MainModule {}
