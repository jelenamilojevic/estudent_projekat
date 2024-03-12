import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik.model';
import { Student } from '../model/student.model';
import { Zaposleni } from '../model/zaposleni.model';
import { PodaciService } from '../podaci.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-promenalozinke',
  templateUrl: './promenalozinke.component.html',
  styleUrls: ['./promenalozinke.component.css']
})
export class PromenalozinkeComponent implements OnInit {

  constructor(private podaci: PodaciService, private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.dohvatiKorisnika();

    this.korisnik = localStorage.getItem('tipkor');
    if (this.korisnik == "student") {
      this.student = true;

     this.gost = false;
     this.admin = false;
     this.zaposleni = false;

    } else if (this.korisnik == "zaposleni"){
      this.zaposleni = true;
     
      this.student = false;
      this.gost = false;
      this.admin = false;
    } else if (this.korisnik == "admin") {
      this.admin = true;

      this.zaposleni = false;
      this.student = false;
      this.gost = false;

    } else {
      this.gost = true;

      this.admin = false;
      this.zaposleni = false;
      this.student = false;
    }
  }

  stara: string;
  nova: string;
  potvrda: string;

  username = localStorage.getItem('korisnik');

  k: Korisnik;
  s: Student;
  z: Zaposleni;

  student: boolean = false;
  gost: boolean = true;
  korisnik: string;
  admin: boolean = false;
  zaposleni: boolean = false;

  promeni() {
    if (this.k.password == this.stara) {

      if (this.nova == this.potvrda) {
        this.userService.promenaLozinke(this.k.username, this.nova,"nije").subscribe(ob=> {
          if (ob['poruka']=='OK') {
            alert('promenjeno');
          }
        });
        if (this.k.tip == 'student') {
          this.azurirajStud();
        } else if (this.k.tip == 'zaposleni') {
          this.azurirajZap();
        }
        localStorage.setItem('promena',"Uspesno promenjena lozinka");
        this.router.navigate(['/login']);
       } else {
         alert('potvrda se ne slaze');
       }
    
    } else {
      alert('pogresna lozinka')
    }

  }

  dohvatiKorisnika() {
    this.userService.dohvatiKorisnika(this.username).subscribe((korisnik: Korisnik)=> {
      if (korisnik) {
        this.k = korisnik;
        if (korisnik.tip == 'student') {
          this.dohvatiStud();
        } else if (korisnik.tip == 'zaposleni') {
          this.dohvatiZap();
        }
      }
      else {
        alert('greska');
      }
    })
  }

  dohvatiStud() {
    this.podaci.dohvStudenta(this.username).subscribe((student: Student)=> {
      if (student) {
        this.s = student;
      }else {
        alert('greska');
      }
    })
  }

  dohvatiZap() {
    this.podaci.dohvNastavno(this.username).subscribe((zaposleni: Zaposleni)=> {
      if (zaposleni) {
        this.z = zaposleni;
      }
      else {
        alert('greska');
      }
    })
  }

  azurirajStud() {

    this.userService.promenaLozinkeStud(this.k.username, this.nova).subscribe(ob=> {
      if (ob['poruka']=='OK') {
        
      }
    });
  }

  azurirajZap() {
    this.userService.promenaLozinkeZap(this.k.username, this.nova).subscribe(ob=> {
      if (ob['poruka']=='OK') {
        
      }
    });
  }

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }

}
