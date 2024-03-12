import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Predmet } from '../model/predmet.model';
import { Projekat } from '../model/projekat.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-predprojekat',
  templateUrl: './predprojekat.component.html',
  styleUrls: ['./predprojekat.component.css']
})
export class PredprojekatComponent implements OnInit {

  constructor(private router: Router, private podaci: PodaciService) { }

  ngOnInit(): void {
    this.dohvatiPredmet();
  }


  naziv = localStorage.getItem('predmet');

  projekti: Projekat[];
  predmet: Predmet;
  nema: boolean = true;
  nemaporuka = "Na ovom predmetu nema projekta";

  lista: Projekat[] = [];
  tmp: Projekat;

  dohvatiPredmet() {
    this.podaci.dohvPredmetFilter(this.naziv).subscribe((predmet: Predmet) => {
      if (predmet) {
        this.predmet = predmet;
          this.dohvatiProjekte();
      } else {
        alert('greska');
      }
    })
  }


  dohvatiProjekte() {
    this.podaci.dohvProjekat(this.naziv).subscribe((projekat: Projekat[])=>{
      if (projekat) {
        this.projekti = projekat;
        this.projektiNovo();
      }
      else {
        alert('greska');
      }
    });
  }

  projektiNovo() {
    this.lista =  new Array<Projekat>();
    for (let l of this.projekti) {
      this.tmp = new Projekat;
      this.tmp.naziv = l.naziv;
      this.tmp.naslov = l.naslov;
      this.tmp.tekst  = l.tekst;
      this.tmp.fajl = l.fajl;
      this.tmp.autor = l.autor;
      this.tmp.id  = l.id;
      this.tmp.datum = new Date(l.datum);
      this.lista.push(this.tmp);
      this.nema = false;
    }
  }
  
 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}
 

}
