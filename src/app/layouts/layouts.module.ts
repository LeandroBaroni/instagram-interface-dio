import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ FooterComponent, HeaderComponent ],
  exports: [
    FooterComponent, HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class LayoutsModule { }
