import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obavestenje } from '../model/obavestenje.model';
import { Pohadja } from '../model/pohadja.model';
import { Predmet } from '../model/predmet.model';
import { ObavestenjaComponent } from '../obavestenja/obavestenja.component';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  constructor(private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.naziv = localStorage.getItem('predmet')!;
    this.dohvObavestenja();
  }

   naziv : string ="";
   ob: Obavestenje[] =[];
   obav!: Obavestenje;
   lista: Obavestenje[] = [];
   sortirano: Obavestenje[] = [];
   tmp!: Date;

   trenutni  = new Date();
   razlika!: Date;


   dohvObavestenja() {
     this.podaci.dohvObavestenja(this.naziv).subscribe((obavestenja: Obavestenje[])=>{
      if(obavestenja) {
        this.ob = obavestenja;
        this.obavestenjaNovo();
        this.sortirajPoDatumu();
      }
      else {
        alert('greska');
      }
     })
   }

   sortirajPoDatumu() {
    this.lista =  this.podaci.sortirajVestiPoDatumu(this.lista);
   }


   datum(obavestenje: any) {
     this.tmp = new Date(obavestenje.datum);
   }

   obavestenjaNovo() {
      for (let o of this.ob) {
        this.obav = new Obavestenje();
        this.obav.naziv = o.naziv;
        this.obav.tekst = o.tekst;
        this.obav.autor = o.autor;
        this.obav.id = o.id;
        this.obav.datum = new Date(o.datum);
        this.lista.push(this.obav);
      }
   }


 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}


}
