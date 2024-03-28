import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik.model';
import { Predmet } from '../model/predmet.model';
import { PodaciService } from '../podaci.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService,private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.ur = new Predmet();

    this.username  = "";
    this.password  = "";
    this.ime  = "";
    this.prezime  = "";
    this.indeks  = "";
    this.tip  = "";
    this.status  = "";

    this.zapuser = "";
    this.zappass = "";
    this.zapime = "";
    this.zapprez = "";
    this.zapadr = "";
    this.zaptel = "";
    this.zapveb = "";
    this.zappod = "";
    this.zapzva = "";
    this.zapkab = "";
    this.zapsta = "";
    this.zapsli = "";

    this.ur.naziv = "";
    this.ur.tip = "";
    this.ur.sifra = "";
    this.ur.fond = 0;
    this.ur.espb = 0;
    this.ur.cilj = "";
    this.ur.ishod = "";
    this.ur.predavanja = "";
    this.ur.vezbe = "";
    this.ur.labvezbe = "";
    this.ur.komentar = "";

  }


  username!: string;
  password!: string;
  ime!: string;
  prezime!: string;
  indeks!: string;
  tip!: string;
  status!: string;

  zapuser!: string;
  zappass!: string;
  zapime!: string;
  zapprez!: string;
  zapadr!: string;
  zaptel!: string;
  zapveb!: string;
  zappod!: string;
  zapzva!: string;
  zapkab!: string;
  zapsta!: string;
  zapsli!: string;

  ur!: Predmet;

  patternStudent = /([a-z]){2}([1-2]){1}([0-9]){5}([dmp]){1}@student.etf.rs/;
  patternIndeks = /dddd/;
  patternZaposleni = /(\w){2,15}@etf.bg.ac.rs/;

  postoji = true;
  postojizap = true;
  postojipred = true;

  image!: File;

  registruj() {

    if (this.username != "" && this.password !="" && this.ime != "" &&
    this.prezime != "" && this.indeks!= "" && this.tip!="" && this.status !="") {

      if (this.patternStudent.test(this.username)) {

        this.userService.dohvatiKorisnika(this.username).subscribe((korisnik: Korisnik)=> {
          if (korisnik) {
            alert('korisnik sa tim username vec postoji');
          } else {

            this.userService.registruj(this.username, this.password, this.ime, this.prezime,
              this.indeks, this.tip, this.status).subscribe((ob:any)=> {
                if (ob['user']== 'ok') {
                  alert('student added');
                }
              });

              this.userService.registrujKor(this.username, this.password, "student","jeste").subscribe((ob:any)=> {
                if (ob['user']=='ok') {
                  alert('kor added');
                }
              });

          }
        })

      } else {
        alert('username nije u dobrom formatu')
      }

    } else {
      alert('unesite sve podatke!');
    }

  }

 registrujZap() {

  if (this.zapuser != "" && this.zappass != "" && this.zapime!= "" && this.zapprez!= ""
  && this.zapadr != ""  && this.zapzva != "" && this.zapkab!= "" && this.zapsta != "") {
    this.zapsli = this.image.name;
    if (this.patternZaposleni.test(this.zapuser)) {

      this.userService.dohvatiKorisnika(this.zapuser).subscribe((korisnik: Korisnik)=> {
        if (korisnik) {
          alert('korisnik sa tim username vec postoji');
        } else {

          this.userService.registrujZap(this.zapuser, this.zappass, this.zapime, this.zapprez,
            this.zapadr,this.zaptel,this.zapveb,this.zappod,this.zapzva,
            this.zapkab, this.zapsta,this.zapsli).subscribe((ob:any)=> {
              if (ob['user']== 'ok') {
                alert('zaposleni added');
              }
            });

            this.userService.registrujKor(this.zapuser, this.zappass, "zaposleni","jeste").subscribe((ob:any)=> {
              if (ob['user']=='ok') {
                alert('kor added');
              }
            });

        }
      })

    } else {
      alert('username nije u dobrom formatu!');
    }


  } else {
    alert('unesite sve podatke!')
  }
 }

 dodajPred() {

  if (this.ur.naziv !="" && this.ur.tip !="" && this.ur.sifra !="" && this.ur.fond !=0
  && this.ur.espb !=0  && this.ur.cilj !="" && this.ur.ishod !="" && this.ur.predavanja
  !="" && this.ur.vezbe !="" && this.ur.labvezbe !="") {

    this.podaci.dohvPredmetFilter(this.ur.naziv).subscribe((predmet: Predmet)=> {
      if (predmet) {
        alert('predmet sa tim imenom vec postoji');
      }else {

        this.podaci.dodajPredmet(this.ur.naziv, this.ur.tip, this.ur.sifra,this.ur.fond,
          this.ur.espb, this.ur.cilj, this.ur.ishod, this.ur.predavanja,
          this.ur.vezbe, this.ur.labvezbe, this.ur.komentar).subscribe((ob:any)=> {
            if (ob['predmet']== 'ok') {
              alert('predmet added');
            }
          });

      }
    })

   } else {
    alert('unesite sve podatke!');
   }

 }


 logout() {
   localStorage.setItem('korisnik',"");
   localStorage.setItem('tipkor',"");
   this.router.navigate(['/login']);
 }

 files!: FileList;

handleFileInput(event: Event) {
  this.files =  (event.target as HTMLInputElement).files!;
  this.image = this.files.item(0)!;
}


}
