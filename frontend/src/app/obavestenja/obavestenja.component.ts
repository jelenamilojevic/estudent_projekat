import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vesti } from '../model/vesti.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-obavestenja',
  templateUrl: './obavestenja.component.html',
  styleUrls: ['./obavestenja.component.css']
})
export class ObavestenjaComponent implements OnInit {

  constructor(private router: Router,private podaci: PodaciService) { }

  ngOnInit(): void {
    this.dohvObavestenja();
    this.korisnik = localStorage.getItem('tipkor');
    if (this.korisnik == "student") {
      this.student = true;
      this.gost = false;
    } else {
      this.student = false;
      this.gost = true;
    }
  }

  student: boolean = false;
  gost: boolean = true;
  korisnik: string;

  obavestenja: Vesti[];
  obav: Vesti;
  lista: Vesti[] = [];


  dohvObavestenja() {
    this.podaci.dohvSveVesti().subscribe((vesti: Vesti[])=>{
     if(vesti) {
       this.obavestenja = vesti;
       this.vestiNovo();
       this.sortirajPoDatumu();
     }
     else {
       alert('greska');
     }
    })
  }

  vestiNovo() {
    for (let o of this.obavestenja) {
      this.obav = new Vesti();
      this.obav.naslov = o.naslov;
      this.obav.tekst = o.tekst;
      this.obav.kategorija = o.kategorija;
      this.obav.id = o.id;
      this.obav.datum = new Date(o.datum);
      this.lista.push(this.obav);
    }
 }

 sortirajPoDatumu() {
  this.lista =  this.podaci.sortirajVestiPoDatumuAdmin(this.lista);
 }


  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }

}
