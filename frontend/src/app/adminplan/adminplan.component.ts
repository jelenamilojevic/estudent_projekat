import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drzi } from '../model/drzi.model';
import { Pohadja } from '../model/pohadja.model';
import { Predmet } from '../model/predmet.model';
import { Student } from '../model/student.model';
import { Zaposleni } from '../model/zaposleni.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-adminplan',
  templateUrl: './adminplan.component.html',
  styleUrls: ['./adminplan.component.css']
})
export class AdminplanComponent implements OnInit {

  constructor(private router: Router,private podaci: PodaciService) { }

  ngOnInit(): void {
    this.dohvPredmete();
    this.dohvZaposlene();
    this.dohvStudente();

    this.drzi.username = "";
    this.drzi.naziv = "";
    this.drzi.grupa = "";

    this.pohadja.username = "";
    this.pohadja.naziv = "";
    this.pohadja.grupa = "";
  }


  predmeti: Predmet[];
  zaposleni: Zaposleni[];
  studenti: Student[];

  drzi: Drzi = new Drzi();
  pohadja: Pohadja = new Pohadja();


  dohvPredmete() {
    this.podaci.dohvSvePredmete().subscribe((predmeti: Predmet[])=>{
      if (predmeti) {
        this.predmeti = predmeti;
      }
      else {
        alert('greska');
      }
    })
  }
  

  dohvZaposlene() {
    this.podaci.dohvSveZaposlene().subscribe((zaposleni: Zaposleni[])=>{
      if (zaposleni) {
        this.zaposleni = zaposleni;
      }
      else {
        alert('greska');
      }
    })
  }
  

  dohvStudente() {
    this.podaci.dohvSveStudente().subscribe((studenti: Student[])=>{
      if (studenti) {
        this.studenti = studenti;
      }
      else {
        alert('greska');
      }
    })
  }


  dodajdrzi() {

    if (this.drzi.username != "" && this.drzi.naziv != "" && this.drzi.grupa != "")  {

      this.podaci.dodajDrzi(this.drzi.username, this.drzi.naziv, this.drzi.grupa).subscribe(ob=> {
        if (ob['drzi']== 'ok') {
          alert('dodato');
        }
      });
    } else {
      alert('popunite sva polja!');
    }
   
  }

  dodajpohadja() {

    if (this.pohadja.username != "" && this.pohadja.naziv != "" && this.pohadja.grupa != "")  {

      this.podaci.dodajPohadja(this.pohadja.username, this.pohadja.naziv, this.pohadja.grupa).subscribe(ob=> {
        if (ob['pohadja']== 'ok') {
          alert('dodato');
        }
      });
    } else {
      alert('popunite sva polja!');
    }

  }

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }
 
 

}
