import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obavestenje } from '../model/obavestenje.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-zapizmena',
  templateUrl: './zapizmena.component.html',
  styleUrls: ['./zapizmena.component.css']
})
export class ZapizmenaComponent implements OnInit {

  constructor(private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {

    this.dohvObavestenja();
  }



  obavestenja: Obavestenje[] = [];
  lista: Obavestenje[] = [];

  tmp!: Obavestenje;
  uredjivanje!: Obavestenje;

  naziv: string ="";

  datum: string = "";
  id : string = "";



  dohvObavestenja() {
    this.podaci.dohvSvaObavestenja().subscribe((obavestenja: Obavestenje[])=>{
     if(obavestenja) {
       this.lista = obavestenja;
       this.obavestenjaNovo();
     }
     else {
       alert('greska');
     }
    })
  }


  obavestenjaNovo() {
    this.obavestenja = new Array<Obavestenje>();
    for (let o of this.lista) {
      this.tmp = new Obavestenje();
      this.tmp.naziv = o.naziv;
      this.tmp.tekst = o.tekst;
      this.tmp.autor = o.autor;
      this.tmp.naslov = o.naslov;
      this.tmp.fajl = o.fajl;
      this.tmp.id = o.id;
      this.tmp.datum = new Date(o.datum);
      this.obavestenja.push(this.tmp);
    }
 }

 uredi(o: Obavestenje) {
   this.uredjivanje = o;
   this.id = this.uredjivanje.id.toString();
   localStorage.setItem('vesturedi',this.id);
   this.router.navigate(['/zapizmenaforma']);
 }

 osvezi() {
   this.dohvObavestenja();
 }


 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}


}
