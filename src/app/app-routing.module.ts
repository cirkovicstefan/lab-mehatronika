import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PredmetiComponent } from './components/predmeti/predmeti.component';
import { LabaratorijeComponent } from './components/labaratorije/labaratorije.component';
import { NastavniciComponent } from './components/nastavnici/nastavnici.component';
import { PartneriComponent } from './components/partneri/partneri.component';
import { ProjektiComponent } from './components/projekti/projekti.component';
import { DiplomskiComponent } from './components/diplomski/diplomski.component';
import { MonografijeComponent } from './components/monografije/monografije.component';
import { ObavestenjaComponent } from './components/obavestenja/obavestenja.component';

const routes: Routes = [

 

  {
    path: '',
    redirectTo: '/pocetna',
    pathMatch: 'full'
  }
  ,
  { path: 'pocetna', component: HomeComponent },
  { path: 'predmeti', component: PredmetiComponent },
  { path: 'lab', component: LabaratorijeComponent },
  { path: 'nastavnici', component: NastavniciComponent },
  { path: 'partneri', component: PartneriComponent },
  { path: 'projekti', component: ProjektiComponent },
  { path: 'diplomski', component: DiplomskiComponent },
  { path: 'monografije', component: MonografijeComponent },
  { path: 'obavestenja', component: ObavestenjaComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
