import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ispitna } from '../model/ispitna.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-predpitanja',
  templateUrl: './predpitanja.component.html',
  styleUrls: ['./predpitanja.component.css']
})
export class PredpitanjaComponent implements OnInit {

  constructor(private podaci:PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvatiIspitna();
  }

  naziv = localStorage.getItem('predmet')!;
  ispitna: Ispitna[] =[];

  lista: Ispitna[] = [];
  tmp!: Ispitna;

  dohvatiIspitna() {
    this.podaci.dohvIspitna(this.naziv).subscribe((ispitna: Ispitna[])=>{
      if (ispitna) {
        this.ispitna = ispitna;
        this.ispitnaNovo();
      }
      else {
        alert('greska');
      }
    });
  }


  ispitnaNovo() {
    this.lista =  new Array<Ispitna>();
    for (let i of this.ispitna) {
      this.tmp = new Ispitna;
      this.tmp.naziv = i.naziv;
      this.tmp.naslov = i.naslov;
      this.tmp.fajl = i.fajl;
      this.tmp.autor = i.autor;
      this.tmp.id  = i.id;
      this.tmp.tip = i.tip;
      this.tmp.velicina = i.velicina;
      this.tmp.datum = new Date(i.datum);
      this.lista.push(this.tmp);
    }
  }


 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}


}
