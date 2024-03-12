import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drzi } from '../model/drzi.model';
import { Predmet } from '../model/predmet.model';
import { Zaposleni } from '../model/zaposleni.model';
import { PodaciService } from '../podaci.service';
import { ZaposleniComponent } from '../zaposleni/zaposleni.component';

@Component({
  selector: 'app-predinfo',
  templateUrl: './predinfo.component.html',
  styleUrls: ['./predinfo.component.css']
})
export class PredinfoComponent implements OnInit {

  constructor(private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvPredmetFilter();
    this.dohvDrzi();
  }


  naziv = localStorage.getItem('predmet');
  drzi : Drzi[];
  zaposleni: Zaposleni;
  sviZap: Zaposleni[] = [];

  tmp: Predmet;

  username: string;


  dohvPredmetFilter() {
    this.podaci.dohvPredmetFilter(this.naziv).subscribe((predmet:Predmet)=>{
      if (predmet) {
       this.tmp = predmet;
      }
      else {
        alert('greska');
      }
    })
  }

  dohvDrzi() {
    this.podaci.dohvDrziNaziv(this.naziv).subscribe((drzi: Drzi[])=> {
      if (drzi) {
        this.drzi = drzi;
        this.dohvZaposlenog();
      }
      else {
        alert('greska');
      }
    })
  }

  dohvZaposlenog() {
    for (let d of this.drzi) {
    this.podaci.dohvNastavno(d.username).subscribe((zaposleni:Zaposleni)=>{
      if (zaposleni) {
       this.zaposleni = zaposleni;
       this.sviZap.push(zaposleni);
      }
      else {
        alert('greska');
      }
    })
   }
  }

  detalji(s: string) {
    localStorage.setItem('nastavno',s);
    this.router.navigate(['/nastavno']);
  }

  
  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }
 

}
