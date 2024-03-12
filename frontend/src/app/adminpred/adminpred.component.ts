import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Predmet } from '../model/predmet.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-adminpred',
  templateUrl: './adminpred.component.html',
  styleUrls: ['./adminpred.component.css']
})
export class AdminpredComponent implements OnInit {

  constructor(private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvPredmete();
  }


  predmeti: Predmet[];
  ur: Predmet;
  izb: Predmet;
  

  dohvPredmete() {
    this.podaci.dohvSvePredmete().subscribe((data: Predmet[])=>{
      this.predmeti = data;
    })
  }

  uredi(pr: Predmet) {
   this.ur = new Predmet();
   this.ur.naziv = pr.naziv;
   this.ur.tip = pr.tip;
   this.ur.sifra = pr.sifra;
   this.ur.fond = pr.fond;
   this.ur.espb = pr.espb;
   this.ur.cilj = pr.cilj;
   this.ur.ishod = pr.ishod;
   this.ur.predavanja = pr.predavanja;
   this.ur.vezbe = pr.vezbe;
   this.ur.labvezbe = pr.labvezbe;
   this.ur.komentar = pr.komentar;
   
  }

  izbrisi(pr: Predmet) {
    this.izb = pr;
    this.podaci.obrisiPredmet(pr.naziv).subscribe(ob=> {
      if (ob['user']== 'ok') {
        this.dohvPredmete();
        alert('obrisano');
      }
    })
  }


  urediPred() {
      this.podaci.azurirajPredmetAdmin(this.ur.naziv, this.ur.tip, this.ur.sifra,this.ur.fond, 
        this.ur.espb, this.ur.cilj, this.ur.ishod, this.ur.predavanja,
        this.ur.vezbe, this.ur.labvezbe, this.ur.komentar).subscribe(ob=> {
            if (ob['poruka']=='OK') {
              alert('azuriran');
            }
        })
        this.dohvPredmete();
   
  }

  
 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}



}
