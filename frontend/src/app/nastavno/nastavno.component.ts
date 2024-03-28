import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zaposleni } from '../model/zaposleni.model';
import { PodaciService } from '../podaci.service';


@Component({
  selector: 'app-nastavno',
  templateUrl: './nastavno.component.html',
  styleUrls: ['./nastavno.component.css']
})
export class NastavnoComponent implements OnInit {

  constructor(private podaci:PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('nastavno')!;
    this.dohvZaposlenog();

    this.korisnik = localStorage.getItem('tipkor')!;
    if (this.korisnik == "student") {
      this.student = true;
      this.gost = false;
    } else {
      this.student = false;
      this.gost = true;
    }
  }

  username: string = "";

  zap!: Zaposleni;

  student: boolean = false;
  gost: boolean = true;
  korisnik: string = "";

  dohvZaposlenog() {
    this.podaci.dohvNastavno(this.username).subscribe((zaposleni:Zaposleni)=>{

      if (zaposleni) {
       this.zap = zaposleni;
      }
      else {
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
