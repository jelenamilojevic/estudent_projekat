import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminplanComponent } from './adminplan/adminplan.component';
import { AdminpredComponent } from './adminpred/adminpred.component';
import { AdminstudComponent } from './adminstud/adminstud.component';
import { AdminzapComponent } from './adminzap/adminzap.component';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { NastavnoComponent } from './nastavno/nastavno.component';
import { NaukaComponent } from './nauka/nauka.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { OsnovneComponent } from './osnovne/osnovne.component';
import { OsnovneostComponent } from './osnovneost/osnovneost.component';
import { OsnovnertiComponent } from './osnovnerti/osnovnerti.component';
import { OsnovnesiComponent } from './osnovnesi/osnovnesi.component';
import { PredavanjaComponent } from './predavanja/predavanja.component';
import { PredinfoComponent } from './predinfo/predinfo.component';
import { PredlabComponent } from './predlab/predlab.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { PredpitanjaComponent } from './predpitanja/predpitanja.component';
import { PredprojekatComponent } from './predprojekat/predprojekat.component';
import { PredvezbeComponent } from './predvezbe/predvezbe.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { PromenalozinkeComponent } from './promenalozinke/promenalozinke.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { SpiskoviComponent } from './spiskovi/spiskovi.component';
import { StudentComponent } from './student/student.component';
import { ZapdodavanjeComponent } from './zapdodavanje/zapdodavanje.component';
import { ZapizmenaComponent } from './zapizmena/zapizmena.component';
import { ZapizmenaformaComponent } from './zapizmenaforma/zapizmenaforma.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { ZaposlenregComponent } from './zaposlenreg/zaposlenreg.component';
import { ZappredmetiComponent } from './zappredmeti/zappredmeti.component';

const routes: Routes = [
  {path:'zaposleni', component:ZaposleniComponent },
  {path: 'obavestenja' , component: ObavestenjaComponent},
  {path: 'osnovne' , component: OsnovneComponent},
  {path: 'master', component:MasterComponent},
  {path: 'projekti', component:ProjektiComponent},
  {path: 'nauka' , component: NaukaComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'login', component:LoginComponent},
  {path: '' ,component:LoginComponent},
  {path: 'registracija' , component:RegistracijaComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'zaposlenreg', component: ZaposlenregComponent},
  {path: 'student' , component: StudentComponent},
  {path: 'nastavno', component: NastavnoComponent},
  {path: 'osnovnesi', component:OsnovnesiComponent},
  {path: 'osnovnerti' , component:OsnovnertiComponent},
  {path: 'osnovneost', component: OsnovneostComponent},
  {path: 'predmeti', component:PredmetiComponent},
  {path: 'predinfo', component: PredinfoComponent},
  {path: 'predavanja', component: PredavanjaComponent},
  {path: 'predvezbe', component: PredvezbeComponent},
  {path: 'predlab', component: PredlabComponent},
  {path: 'predpitanja', component: PredpitanjaComponent},
  {path: 'predprojekat', component: PredprojekatComponent},
  {path: 'zappredmeti', component: ZappredmetiComponent},
  {path: 'zapdodavanje', component: ZapdodavanjeComponent},
  {path: 'zapizmena', component: ZapizmenaComponent},
  {path: 'zapizmenaforma', component: ZapizmenaformaComponent},
  {path: 'adminzap', component: AdminzapComponent},
  {path: 'adminstud', component: AdminstudComponent},
  {path: 'adminplan', component: AdminplanComponent},
  {path: 'adminpred', component: AdminpredComponent},
  {path: 'promenalozinke', component: PromenalozinkeComponent},
  {path: 'spiskovi', component: SpiskoviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
