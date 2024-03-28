import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drzi } from '../model/drzi.model';
import { Ispitna } from '../model/ispitna.model';
import { Labvezbe } from '../model/labvezbe.model';
import { Predavanja } from '../model/predavanja.model';
import { Predmet } from '../model/predmet.model';
import { Vezbe } from '../model/vezbe.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-zappredmeti',
  templateUrl: './zappredmeti.component.html',
  styleUrls: ['./zappredmeti.component.css']
})
export class ZappredmetiComponent implements OnInit {

  constructor(private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvatiPredmete();
  }

  username = localStorage.getItem('korisnik')!;
  predmeti: Drzi[] = [];
  drzi!: Drzi;
  uredi!: Drzi;
  prikaz!: Predmet;
  uredjivanje!: Predmet;
  urediInfo = false;
  urediPredavanja = false;
  urediVezbe = false;
  urediispitna = false;
  urediLab= false;

  predavanja: Predavanja[] = [];
  lista: Predavanja[] = [];
  tmp!: Predavanja;
  naziv: string = "";

  vezbe: Vezbe[] =[];
  listav: Vezbe[] = [];
  tmpv!: Vezbe;

  ispitna: Ispitna[] = [];

  listai: Ispitna[] = [];
  tmpi!: Ispitna;

  labvezbe: Labvezbe [] = [];
  listal: Labvezbe[] = [];
  tmpl!: Labvezbe;

  nemalab: boolean = true;
  imalab = false;
  nemalabporuka = "Na ovom predmetu nema laboratorijskih vezbi";



  dohvatiPredmete() {
    this.podaci.dohvDrziIme(this.username).subscribe((predmeti: Drzi[])=> {
      if (predmeti) {
        this.predmeti = predmeti;
      }
      else {
        alert('greska');
      }
    })
  }


  detalji(p: Drzi) {
    this.drzi = p;
    this.podaci.dohvPredmetFilter(this.drzi.naziv).subscribe((predmet: Predmet)=> {
      if (predmet) {
        this.prikaz = predmet;
      }else {
        alert('greska');
      }
    })
  }

  urediInformacije(d: Drzi) {
    this.uredi = d;
    this.urediInfo  = true;
    this. urediPredavanja = false;
    this.urediVezbe = false;
    this.urediispitna = false;
    this.urediLab = false;
    this.podaci.dohvPredmetFilter(this.uredi.naziv).subscribe((predmet: Predmet)=> {
      if (predmet) {
        this.uredjivanje = predmet;
      }else {
        alert('greska');
      }
    })

  }

  urediPred(d: Drzi) {
    this.uredi = d;
    this.urediPredavanja = true;
    this.urediInfo = false;
    this.urediVezbe = false;
    this.urediispitna = false;
    this.urediLab = false;
    this.podaci.dohvPredmetFilter(this.uredi.naziv).subscribe((predmet: Predmet)=> {
      if (predmet) {
        this.uredjivanje = predmet;
        this.naziv = predmet.naziv;
        this.dohvatiPredavanja();
      }else {
        alert('greska');
      }
    })

  }

  urediVez(d: Drzi) {
    this.uredi = d;
    this.urediVezbe = true;
    this.urediInfo = false;
    this.urediPredavanja = false;
    this.urediispitna = false;
    this.urediLab = false;
    this.podaci.dohvPredmetFilter(this.uredi.naziv).subscribe((predmet: Predmet)=> {
      if (predmet) {
        this.uredjivanje = predmet;
        this.naziv = predmet.naziv;
        this.dohvatiVezbe();
      }else {
        alert('greska');
      }
    })
  }

  urediIspitnaPitanja(d: Drzi) {
    this.uredi = d;
    this.urediispitna = true;
    this.urediInfo = false;
    this.urediPredavanja = false;
    this.urediVezbe = false;
    this.urediLab = false;
    this.podaci.dohvPredmetFilter(this.uredi.naziv).subscribe((predmet: Predmet)=> {
      if (predmet) {
        this.uredjivanje = predmet;
        this.naziv = predmet.naziv;
        this.dohvatiIspitna();
      }else {
        alert('greska');
      }
    })
  }

  urediLaboratoriju(d: Drzi) {
    this.uredi = d;
    this.urediLab = true;
    this.urediispitna = false;
    this.urediInfo = false;
    this.urediPredavanja = false;
    this.urediVezbe = false;
    this.podaci.dohvPredmetFilter(this.uredi.naziv).subscribe((predmet: Predmet)=> {
      if (predmet) {
        this.uredjivanje = predmet;
        this.naziv = predmet.naziv;

        if (this.uredjivanje.labvezbe == "ima") {
          this.dohvatiLabVezbe();
          this.nemalab  = false;
          this.imalab = true;
        }
        else {
          this.imalab = false;
          this.nemalab = true;
        }
      }else {
        alert('greska');
      }
    })
  }

  azuriraj() {
    this.podaci.azurirajPredmet(this.uredjivanje.naziv, this.uredjivanje.sifra,this.uredjivanje.tip, this.uredjivanje.espb,
      this.uredjivanje.cilj, this.uredjivanje.ishod).subscribe((ob: any)=> {
          if (ob['poruka']=='OK') {
            alert('uspesno azurirano');
          }
      })
  }


  dohvatiPredavanja() {
    this.podaci.dohvPredavanja(this.naziv).subscribe((predavanja: Predavanja[])=>{
      if (predavanja) {
        this.predavanja = predavanja;
        this.predavanjaNovo();
      }
      else {
        alert('greska');
      }
    });
  }

  dohvatiVezbe() {
    this.podaci.dohvVezbe(this.naziv).subscribe((vezbe: Vezbe[])=>{
      if (vezbe) {
        this.vezbe = vezbe;
        this.vezbeNovo();
      }
      else {
        alert('greska');
      }
    });
  }


  dohvatiIspitna() {
    this.podaci.dohvIspitna(this.naziv).subscribe((ispitna: Ispitna[])=>{
      if (ispitna) {
        this.ispitna = ispitna;
        this.ispitnaNovo();
      }
      else {
        alert('greska');
      }
    });
  }

  dohvatiLabVezbe() {
    this.podaci.dohvLabVezbe(this.naziv).subscribe((labvezbe: Labvezbe[])=>{
      if (labvezbe) {
        this.labvezbe = labvezbe;
        this.labNovo();
      }
      else {
        alert('greska');
      }
    });
  }

  labNovo() {
    this.listal =  new Array<Labvezbe>();
    for (let l of this.labvezbe) {
      this.tmpl = new Labvezbe;
      this.tmpl.naziv = l.naziv;
      this.tmpl.naslov = l.naslov;
      this.tmpl.tekst  = l.tekst;
      this.tmpl.fajl = l.fajl;
      this.tmpl.autor = l.autor;
      this.tmpl.id  = l.id;
      this.tmpl.tip = l.tip;
      this.tmpl.velicina = l.velicina;
      this.tmpl.datum = new Date(l.datum);
      this.listal.push(this.tmpl);
    }
  }




  predavanjaNovo() {
    this.lista =  new Array<Predavanja>();
    for (let p of this.predavanja) {
      this.tmp = new Predavanja;
      this.tmp.naziv = p.naziv;
      this.tmp.naslov = p.naslov;
      this.tmp.fajl = p.fajl;
      this.tmp.autor = p.autor;
      this.tmp.id  = p.id;
      this.tmp.tip = p.tip;
      this.tmp.velicina = p.velicina;
      this.tmp.datum = new Date(p.datum);
      this.lista.push(this.tmp);
    }
  }


  vezbeNovo() {
    this.listav =  new Array<Vezbe>();
      for (let v of this.vezbe) {
        this.tmpv = new Vezbe;
        this.tmpv.naziv = v.naziv;
        this.tmpv.naslov = v.naslov;
        this.tmpv.fajl = v.fajl;
        this.tmpv.autor = v.autor;
        this.tmpv.id  = v.id;
        this.tmpv.tip = v.tip;
        this.tmpv.velicina = v.velicina;
        this.tmpv.datum = new Date(v.datum);
        this.listav.push(this.tmpv);
      }
    }

    ispitnaNovo() {
      this.listai =  new Array<Ispitna>();
      for (let i of this.ispitna) {
        this.tmpi = new Ispitna;
        this.tmpi.naziv = i.naziv;
        this.tmpi.naslov = i.naslov;
        this.tmpi.fajl = i.fajl;
        this.tmpi.autor = i.autor;
        this.tmpi.id  = i.id;
        this.tmpi.tip = i.tip;
        this.tmpi.velicina = i.velicina;
        this.tmpi.datum = new Date(i.datum);
        this.listai.push(this.tmpi);
      }
    }



  ukloni(p: Predavanja) {
    if (this.username == p.autor) {
      this.podaci.obrisiPredavanja(p.id).subscribe((ob:any)=> {
        if (ob['user']== 'ok') {
          this.dohvatiPredavanja();
          alert('obrisano');
        }
      });
    }else {
      alert('mozete da uklonite samo stavke koje ste vi postavili');
    }
  }


  ukloniv(v: Vezbe) {
    if (this.username == v.autor) {
      this.podaci.obrisiVezbe(v.id).subscribe((ob:any)=> {
        if (ob['user']== 'ok') {
          this.dohvatiVezbe();
          alert('obrisano');
        }
      });
    }else {
      alert('mozete da uklonite samo stavke koje ste vi postavili');
    }
  }


  uklonilab(l: Labvezbe) {
    if (this.username == l.autor) {
      this.podaci.obrisiLab(l.id).subscribe((ob:any)=> {
        if (ob['user']== 'ok') {
          this.dohvatiLabVezbe();
          alert('obrisano');
        }
      });
    }else {
      alert('mozete da uklonite samo stavke koje ste vi postavili');
    }
  }


  ukloniisp(i: Ispitna) {
    if (this.username == i.autor) {
      this.podaci.obrisiIspitna(i.id).subscribe((ob:any)=> {
        if (ob['user']== 'ok') {
          this.dohvatiIspitna();
          alert('obrisano');
        }
      });
    }else {
      alert('mozete da uklonite samo stavke koje ste vi postavili');
    }
  }



 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}

}
