import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PredmetiComponent } from './components/predmeti/predmeti.component';
import { ProjektiComponent } from './components/projekti/projekti.component';
import { NastavniciComponent } from './components/nastavnici/nastavnici.component';
import { MonografijeComponent } from './components/monografije/monografije.component';
import { LabaratorijeComponent } from './components/labaratorije/labaratorije.component';
import { DiplomskiComponent } from './components/diplomski/diplomski.component';
import { ObavestenjaComponent } from './components/obavestenja/obavestenja.component';
import { PartneriComponent } from './components/partneri/partneri.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PredmetiComponent,
    ProjektiComponent,
    NastavniciComponent,
    MonografijeComponent,
    LabaratorijeComponent,
    DiplomskiComponent,
    ObavestenjaComponent,
    PartneriComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
