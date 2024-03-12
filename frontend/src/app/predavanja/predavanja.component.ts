import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Predavanja } from '../model/predavanja.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-predavanja',
  templateUrl: './predavanja.component.html',
  styleUrls: ['./predavanja.component.css']
})
export class PredavanjaComponent implements OnInit {

  constructor(private podaci:PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvatiPredavanja();

  }


  predavanja: Predavanja[] = [];
  naziv = localStorage.getItem('predmet')!;
  lista: Predavanja[] = [];
  tmp!: Predavanja;

  dohvatiPredavanja() {
    this.podaci.dohvPredavanja(this.naziv).subscribe((predavanja: Predavanja[])=>{
      if (predavanja) {
        this.predavanja = predavanja;
        this.predavanjaNovo();
      }
      else {
        alert('greska');
      }
    });
  }


  predavanjaNovo() {
    this.lista =  new Array<Predavanja>();
    for (let p of this.predavanja) {
      this.tmp = new Predavanja;
      this.tmp.naziv = p.naziv;
      this.tmp.naslov = p.naslov;
      this.tmp.fajl = p.fajl;
      this.tmp.autor = p.autor;
      this.tmp.id  = p.id;
      this.tmp.tip = p.tip;
      this.tmp.velicina = p.velicina;
      this.tmp.datum = new Date(p.datum);
      this.lista.push(this.tmp);
    }
  }


 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}


}
