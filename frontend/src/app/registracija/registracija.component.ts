import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../model/korisnik.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.username  = "";
    this.password  = "";
    this.ime  = "";
    this.prezime  = "";
    this.indeks  = "";
    this.tip  = "";
    this.status  = "";
  }

  username: string ="";
  password: string = "";
  ime: string ="";
  prezime: string ="";
  indeks: string ="";
  tip: string ="";
  status: string ="";

  patternStudent = /([a-z]){2}([1-2]){1}([0-9]){5}([dmp]){1}@student.etf.rs/;
  patternIndeks = /dddd/;



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

}
