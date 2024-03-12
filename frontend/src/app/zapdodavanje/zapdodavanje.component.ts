import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drzi } from '../model/drzi.model';
import { Obavestenje } from '../model/obavestenje.model';
import { Predmet } from '../model/predmet.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-zapdodavanje',
  templateUrl: './zapdodavanje.component.html',
  styleUrls: ['./zapdodavanje.component.css']
})
export class ZapdodavanjeComponent implements OnInit {

  constructor(private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvDrzi();
    this.dohvatiObavestenja();
  }


  username = localStorage.getItem('korisnik')!;

  drzi: Drzi[] = [];

  predmet: string = "";
  datum: string = "";

  obavestenje: Obavestenje = new Obavestenje();

  obavestenja: Obavestenje[] = [];
  max = 0;

  datumb!: Date;

  fileUpload!: File;


  dohvDrzi() {
    this.podaci.dohvDrziIme(this.username).subscribe((drzi: Drzi[])=> {
      if (drzi) {
        this.drzi = drzi;
      }else {
        alert('greska');
      }
    })
  }

  dodaj() {
    this.obavestenje.id = ++this.max;
    this.obavestenje.autor = this.username;
    this.obavestenje.datum = new Date(this.datum);
    this.obavestenje.fajl = this.fileUpload.name;
    this.podaci.dodajObavestenje(this.obavestenje.naziv,this.obavestenje.tekst,this.obavestenje.datum,
      this.obavestenje.id, this.obavestenje.autor, this.obavestenje.naslov,this.obavestenje.fajl).subscribe((ob:any)=> {
        if (ob['obavestenje']== 'ok') {
          alert('obavestenje added');
        }
      });
  }

  nadjiMax() {
    for (let o of this.obavestenja) {
      if (this.max < o.id) {
      this.max = o.id;
      }
    }
  }


  dohvatiObavestenja() {
    this.podaci.dohvSvaObavestenja().subscribe((obavestenja: Obavestenje[])=> {
      if (obavestenja) {
        this.obavestenja = obavestenja;
        this.nadjiMax();
      }
      else {
        alert('greska');
      }
    })
  }

  handleFileInput(files: FileList) {
    this.fileUpload = files.item(0)!;
  }

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }

}
