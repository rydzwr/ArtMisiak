import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KonsultacjeComponent } from './konsultacje/konsultacje.component';
import { InfoComponent } from './info/info.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { UslugiComponent } from './uslugi/uslugi.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KonsultacjeComponent,
    InfoComponent,
    KontaktComponent,
    UslugiComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
