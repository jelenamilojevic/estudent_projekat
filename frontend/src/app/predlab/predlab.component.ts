import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labvezbe } from '../model/labvezbe.model';
import { Predmet } from '../model/predmet.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-predlab',
  templateUrl: './predlab.component.html',
  styleUrls: ['./predlab.component.css']
})
export class PredlabComponent implements OnInit {

  constructor(private podaci:PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvatiPredmet();
  }

  naziv = localStorage.getItem('predmet')!;

  labvezbe: Labvezbe [] = [];
  predmet!: Predmet;
  nemalab: boolean = true;
  nemalabporuka = "Na ovom predmetu nema laboratorijskih vezbi";

  lista: Labvezbe[] = [];
  tmp!: Labvezbe;


  dohvatiPredmet() {
    this.podaci.dohvPredmetFilter(this.naziv).subscribe((predmet: Predmet) => {
      if (predmet) {
        this.predmet = predmet;
        if (this.predmet.labvezbe == "ima") {
          this.dohvatiLabVezbe();
          this.nemalab  = false;
        }
      } else {
        alert('greska');
      }
    })
  }

  dohvatiLabVezbe() {
    this.podaci.dohvLabVezbe(this.naziv).subscribe((labvezbe: Labvezbe[])=>{
      if (labvezbe) {
        this.labvezbe = labvezbe;
        this.labNovo();
      }
      else {
        alert('greska');
      }
    });
  }

  labNovo() {
    this.lista =  new Array<Labvezbe>();
    for (let l of this.labvezbe) {
      this.tmp = new Labvezbe;
      this.tmp.naziv = l.naziv;
      this.tmp.naslov = l.naslov;
      this.tmp.tekst  = l.tekst;
      this.tmp.fajl = l.fajl;
      this.tmp.autor = l.autor;
      this.tmp.id  = l.id;
      this.tmp.tip = l.tip;
      this.tmp.velicina = l.velicina;
      this.tmp.datum = new Date(l.datum);
      this.lista.push(this.tmp);
    }
  }


 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}

}
