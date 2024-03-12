import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obavestenje } from '../model/obavestenje.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-zapizmenaforma',
  templateUrl: './zapizmenaforma.component.html',
  styleUrls: ['./zapizmenaforma.component.css']
})
export class ZapizmenaformaComponent implements OnInit {

  constructor(private podaci: PodaciService, private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(localStorage.getItem('vesturedi'));
    this.dohvatiObavestenje();
  }


  uredjivanje: Obavestenje;
  id: number;
  tmp: Obavestenje;
  datum: string;


  dohvatiObavestenje() {
    this.podaci.dohvObavestenje(this.id).subscribe((obavestenje: Obavestenje)=> {
      if (obavestenje) {
        this.tmp = obavestenje;
        this.obavestenjeNovo();
      }
      else {
        alert('greska');
      }
    })
  }

  obavestenjeNovo() {
    this.uredjivanje = new Obavestenje();
      this.uredjivanje.naziv = this.tmp.naziv;
      this.uredjivanje.tekst = this.tmp.tekst;
      this.uredjivanje.autor = this.tmp.autor;
      this.uredjivanje.naslov = this.tmp.naslov;
      this.uredjivanje.fajl = this.tmp.fajl;
      this.uredjivanje.id = this.tmp.id;
      this.uredjivanje.datum = new Date(this.tmp.datum);
  }

  potvrdi() {
    this.uredjivanje.datum = new Date(this.datum);
    this.podaci.azurirajObavestenje(this.uredjivanje.id, this.uredjivanje.naslov,
     this.uredjivanje.fajl, this.uredjivanje.tekst, this.uredjivanje.datum).subscribe(ob=> {
       if (ob['poruka']=='OK') {
         alert('azurirano');
       }
     })
  }

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }

}
