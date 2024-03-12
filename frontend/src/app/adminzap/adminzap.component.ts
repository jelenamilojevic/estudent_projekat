import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zaposleni } from '../model/zaposleni.model';
import { PodaciService } from '../podaci.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminzap',
  templateUrl: './adminzap.component.html',
  styleUrls: ['./adminzap.component.css']
})
export class AdminzapComponent implements OnInit {

  constructor(private router: Router, private podaci: PodaciService,private userService: UserService) { }

  ngOnInit(): void {
    this.dohvZaposlene();
  }


  zaposleni: Zaposleni[] =[];
  ur!: Zaposleni;
  izb!: Zaposleni;


  dohvZaposlene() {
    this.podaci.dohvSveZaposlene().subscribe((data: Zaposleni[])=>{
      this.zaposleni = data;
    })
  }

  uredi(zap: Zaposleni) {
   this.ur = new Zaposleni();
   this.ur.username = zap.username;
   this.ur.password = zap.password;
   this.ur.ime = zap.ime;
   this.ur.prezime = zap.prezime;
   this.ur.adresa = zap.adresa;
   this.ur.telefon = zap.telefon;
   this.ur.vebsajt = zap.vebsajt;
   this.ur.podaci = zap.podaci;
   this.ur.zvanje = zap.zvanje;
   this.ur.kabinet = zap.kabinet;
   this.ur.status = zap.status;
   this.ur.slika = zap.slika;
  }

  izbrisi(zap: Zaposleni) {
    this.izb = zap;
    this.userService.obrisiZaposlenog(zap.username).subscribe((ob:any)=> {
      if (ob['user']== 'ok') {
        this.dohvZaposlene();
        alert('obrisano');
      }
    })
    this.userService.obrisiKorisnika(zap.username).subscribe((ob:any)=> {
      if (ob['user']== 'ok') {
        alert('obrisano2');
      }
    })
  }


  urediZap() {
      this.podaci.azurirajZaposlenogAdmin(this.ur.username, this.ur.password,
        this.ur.ime, this.ur.prezime, this.ur.adresa, this.ur.telefon,
        this.ur.podaci, this.ur.vebsajt, this.ur.kabinet, this.ur.zvanje, this.ur.status,
        this.ur.slika).subscribe((ob:any)=> {
            if (ob['poruka']=='OK') {
              alert('azuriran');
            }
        })
        this.dohvZaposlene();

  }

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }



}
