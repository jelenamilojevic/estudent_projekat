import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vezbe } from '../model/vezbe.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-predvezbe',
  templateUrl: './predvezbe.component.html',
  styleUrls: ['./predvezbe.component.css']
})
export class PredvezbeComponent implements OnInit {

  constructor(private podaci:PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvatiVezbe();
  }

  naziv = localStorage.getItem('predmet');
  vezbe: Vezbe[];

  lista: Vezbe[] = [];
  tmp: Vezbe;

  dohvatiVezbe() {
    this.podaci.dohvVezbe(this.naziv).subscribe((vezbe: Vezbe[])=>{
      if (vezbe) {
        this.vezbe = vezbe;
        this.vezbeNovo();
      }
      else {
        alert('greska');
      }
    });
  }

 vezbeNovo() {
  this.lista =  new Array<Vezbe>();
    for (let v of this.vezbe) {
      this.tmp = new Vezbe;
      this.tmp.naziv = v.naziv;
      this.tmp.naslov = v.naslov;
      this.tmp.fajl = v.fajl;
      this.tmp.autor = v.autor;
      this.tmp.id  = v.id;
      this.tmp.tip = v.tip;
      this.tmp.velicina = v.velicina;
      this.tmp.datum = new Date(v.datum);
      this.lista.push(this.tmp);
    }
  }

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }
 


}
