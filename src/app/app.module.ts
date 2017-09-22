import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ImovelComponent } from './imoveis/imovel/imovel.component';
import { ImoveisService } from './imoveis/imoveis.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImoveisComponent,
    ImovelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ImoveisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
