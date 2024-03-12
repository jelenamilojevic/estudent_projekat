import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zaposleni } from '../model/zaposleni.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-zaposlenreg',
  templateUrl: './zaposlenreg.component.html',
  styleUrls: ['./zaposlenreg.component.css']
})
export class ZaposlenregComponent implements OnInit {

  constructor(private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvatiZap();
  }

  username = localStorage.getItem('korisnik');
  zaposleni: Zaposleni;

  dohvatiZap() {
    this.podaci.dohvNastavno(this.username).subscribe((zaposleni: Zaposleni)=>{
      if (zaposleni) {
        this.zaposleni = zaposleni;
      } else {
        alert('greska');
      }
    })
  }

  azuriraj() {
    this.podaci.azurirajZaposlenog(this.zaposleni.username, this.zaposleni.adresa,
      this.zaposleni.telefon, this.zaposleni.podaci, this.zaposleni.vebsajt, this.zaposleni.kabinet).subscribe(ob=> {
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
