import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drzi } from '../model/drzi.model';
import { Zaposleni } from '../model/zaposleni.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  constructor(private podaci:PodaciService, private router: Router) { }

  ngOnInit(): void {
    this.dohvZaposlene();
    //this.prikazi = null;
    this.korisnik = localStorage.getItem('tipkor')!;
    if (this.korisnik == "student") {
      this.student = true;
      this.gost = false;
    } else {
      this.student = false;
      this.gost = true;
    }
  }


  zaposleni: Zaposleni[] =[];
  prikazi!: Zaposleni;
  drzi : Drzi[] = [];
  username: string = "";

  student: boolean = false;
  gost: boolean = true;
  korisnik: string = "";

  dohvZaposlene() {
    this.podaci.dohvSveZaposlene().subscribe((data: Zaposleni[])=>{
      this.zaposleni = data;
    })
  }

  prikaz(z: Zaposleni) {
    this.dohvDrzi(z.username);
  }

  detalji(z: Zaposleni) {
    localStorage.setItem('nastavno',z.username);
    this.router.navigate(['/nastavno']);
  }

  dohvDrzi(username: string) {
    this.podaci.dohvDrziIme(username).subscribe((drzi: Drzi[])=> {
      if (drzi) {
        this.drzi = drzi;
      }else {
        alert('greska');
      }
    })
  }


 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}


}
