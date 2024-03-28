import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { OsnovneComponent } from './osnovne/osnovne.component';
import { MasterComponent } from './master/master.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { NaukaComponent } from './nauka/nauka.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgImageSliderModule } from 'ng-image-slider';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { ZaposlenregComponent } from './zaposlenreg/zaposlenreg.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { HttpClientModule } from '@angular/common/http';
import { NastavnoComponent } from './nastavno/nastavno.component';
import { OsnovnesiComponent } from './osnovnesi/osnovnesi.component';
import { OsnovnertiComponent } from './osnovnerti/osnovnerti.component';
import { OsnovneostComponent } from './osnovneost/osnovneost.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { PredinfoComponent } from './predinfo/predinfo.component';
import { PredavanjaComponent } from './predavanja/predavanja.component';
import { PredvezbeComponent } from './predvezbe/predvezbe.component';
import { PredpitanjaComponent } from './predpitanja/predpitanja.component';
import { PredlabComponent } from './predlab/predlab.component';
import { PredprojekatComponent } from './predprojekat/predprojekat.component';
import { ZappredmetiComponent } from './zappredmeti/zappredmeti.component';
import { ZapdodavanjeComponent } from './zapdodavanje/zapdodavanje.component';
import { ZapizmenaComponent } from './zapizmena/zapizmena.component';
//import {MatDatepickerModule} from '@angular/material/datepicker';
import { ZapizmenaformaComponent } from './zapizmenaforma/zapizmenaforma.component';
import { AdminzapComponent } from './adminzap/adminzap.component';
import { AdminstudComponent } from './adminstud/adminstud.component';
import { AdminpredComponent } from './adminpred/adminpred.component';
import { AdminplanComponent } from './adminplan/adminplan.component';
import { PromenalozinkeComponent } from './promenalozinke/promenalozinke.component';
import { SpiskoviComponent } from './spiskovi/spiskovi.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    ZaposleniComponent,
    ObavestenjaComponent,
    OsnovneComponent,
    MasterComponent,
    ProjektiComponent,
    NaukaComponent,
    KontaktComponent,
    LoginComponent,
    StudentComponent,
    AdminComponent,
    ZaposlenregComponent,
    RegistracijaComponent,
    NastavnoComponent,
    OsnovnesiComponent,
    OsnovnertiComponent,
    OsnovneostComponent,
    PredmetiComponent,
    PredinfoComponent,
    PredavanjaComponent,
    PredvezbeComponent,
    PredpitanjaComponent,
    PredlabComponent,
    PredprojekatComponent,
    ZappredmetiComponent,
    ZapdodavanjeComponent,
    ZapizmenaComponent,
    ZapizmenaformaComponent,
    AdminzapComponent,
    AdminstudComponent,
    AdminpredComponent,
    AdminplanComponent,
    PromenalozinkeComponent,
    SpiskoviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgImageSliderModule
    //dodaj     NgImageSliderModule,     MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
