import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Obavestenje } from './model/obavestenje.model';
import { Vesti } from './model/vesti.model';
import { Drzi } from './model/drzi.model';
import { Predmet } from './model/predmet.model';
import { Predavanja } from './model/predavanja.model';
import { Vezbe } from './model/vezbe.model';
import { Ispitna } from './model/ispitna.model';
import { Labvezbe } from './model/labvezbe.model';
import { Zaposleni } from './model/zaposleni.model';

@Injectable({
  providedIn: 'root'
})
export class PodaciService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'


  dohvSveZaposlene() {
    return this.http.get(`${this.uri}/dohvSveZaposlene`);
  }

  dohvSvaObavestenja() {
    return this.http.get(`${this.uri}/dohvSvaObavestenja`);
  }

  dohvSveStudente() {
    return this.http.get(`${this.uri}/dohvSveStudente`);
  }

  dohvSvePredmete() {
    return this.http.get(`${this.uri}/dohvSvePredmete`);
  }


  dohvSveVesti() {
    return this.http.get(`${this.uri}/dohvSveVesti`);
  }

  dohvNastavno(username: string) {
    const data = {
      username: username
    }

    return this.http.post<Zaposleni>(`${this.uri}/dohvNastavno`,data);
  }

  dohvPredmete(username: string) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/dohvPredmete`,data);
  }

  dohvPredmetFilter(naziv: string) {
    const data = {
      naziv: naziv
    }
    return this.http.post<Predmet>(`${this.uri}/dohvPredmetFilter`,data);
  }


  dohvStudenta(username: string) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/dohvStudenta`,data);
  }

  dohvDrziNaziv(naziv: string) {
    const data = {
      naziv: naziv
    }
    return this.http.post(`${this.uri}/dohvDrziNaziv`,data);
  }

  dohvDrziIme(username: string) {
    const data = {
      username: username
    }
    return this.http.post<Drzi[]>(`${this.uri}/dohvDrziIme`,data);
  }


dohvObavestenja(naziv: string) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/dohvObavestenja`,data);
}


dohvObavestenje(id: any) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/dohvObavestenje`,data);
}

sortirajVestiPoDatumu(obavestenja: Obavestenje[]) : Obavestenje[] {
  return obavestenja.sort((a,b)=>{
    if (a.datum<b.datum) return 1;
    else {
      if (a.datum>b.datum) return -1;
      else return 0;
    }
  })
}


sortirajVestiPoDatumuAdmin(vesti: Vesti[]) : Vesti[] {
  return vesti.sort((a,b)=>{
    if (a.datum<b.datum) return 1;
    else {
      if (a.datum>b.datum) return -1;
      else return 0;
    }
  })
}


dohvPredavanja(naziv: string) {
  const data = {
    naziv: naziv
  }
  return this.http.post<Predavanja[]>(`${this.uri}/dohvPredavanja`,data);
}

dohvVezbe(naziv: string) {
  const data = {
    naziv: naziv
  }
  return this.http.post<Vezbe[]>(`${this.uri}/dohvVezbe`,data);
}

dohvIspitna(naziv: string) {
  const data = {
    naziv: naziv
  }
  return this.http.post<Ispitna[]>(`${this.uri}/dohvIspitna`,data);
}

dohvLabVezbe(naziv: string) {
  const data = {
    naziv: naziv
  }
  return this.http.post<Labvezbe[]>(`${this.uri}/dohvLab`,data);
}


dohvProjekat(naziv: string) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/dohvProjekat`,data);
}





azurirajZaposlenog(username: string, adresa: string, telefon: string, podaci: any, vebsajt: string, kabinet: any) {
  const data = {
    username: username,
    adresa: adresa,
    telefon: telefon,
    podaci: podaci,
    vebsajt: vebsajt,
    kabinet: kabinet
  }
  return this.http.post(`${this.uri}/azurirajZaposlenog`,data);

}


azurirajZaposlenogAdmin(username: string,password: string,ime: string,prezime: string, adresa: string, telefon: string, podaci: any, vebsajt: string, kabinet: any,zvanje: string,status:any,slika: string) {
  const data = {
    username: username,
    password: password,
    ime: ime,
    prezime: prezime,
    adresa: adresa,
    telefon: telefon,
    podaci: podaci,
    vebsajt: vebsajt,
    kabinet: kabinet,
    zvanje: zvanje,
    status: status,
    slika: slika
  }
  return this.http.post(`${this.uri}/azurirajZaposlenogAdmin`,data);

}


azurirajStudentaAdmin(username:string,password: string,ime: string,prezime: string, indeks: any,tip: any, status: any) {
  const data = {
    username: username,
    password: password,
    ime: ime,
    prezime: prezime,
    indeks: indeks,
    tip: tip,
    status: status,
  }
  return this.http.post(`${this.uri}/azurirajStudenta`,data);

}

azurirajPredmet(naziv: string, sifra: any, tip:any, espb: any, cilj: any, ishod: any) {
  const data = {
  naziv: naziv,
  sifra: sifra,
  tip: tip,
  espb: espb,
  cilj: cilj,
  ishod: ishod
  }
  return this.http.post(`${this.uri}/azurirajPredmet`,data);

}

azurirajPredmetAdmin(naziv: string,tip:any, sifra:any, fond:any, espb:any, cilj:any, ishod: any,predavanja:any,vezbe:any,labvezbe:any, komentar:any) {
  const data = {
  naziv: naziv,
  tip: tip,
  sifra: sifra,
  fond: fond,
  espb: espb,
  cilj: cilj,
  ishod: ishod,
  predavanja: predavanja,
  vezbe: vezbe,
  labvezbe: labvezbe,
  komentar: komentar
  }
  return this.http.post(`${this.uri}/azurirajPredmetAdmin`,data);

}


obrisiPredavanja(id:any) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/obrisiPredavanja`,data);
}

obrisiVezbe(id:any) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/obrisiVezbe`,data);
}

obrisiLab(id: any) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/obrisiLab`,data);
}

obrisiIspitna(id: any) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/obrisiIspitna`,data);
}

obrisiPredmet(naziv:string) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/obrisiPredmet`,data);
}


dodajObavestenje(naziv: string,tekst: string,datum: any,id: any, autor: any, naslov: string,fajl: any) {
  const data = {
   naziv:naziv,
   tekst: tekst,
   datum: datum,
   id: id,
   autor: autor,
   naslov: naslov,
   fajl: fajl
  }
  return this.http.post(`${this.uri}/dodajObavestenje`,data);
}


dodajDrzi(username: string,naziv: string,grupa: any) {
  const data = {
   username: username,
   naziv:naziv,
   grupa: grupa
  }
  return this.http.post(`${this.uri}/dodajDrzi`,data);
}



dodajPohadja(username: string,naziv: string,grupa: any) {
  const data = {
   username: username,
   naziv:naziv,
   grupa: grupa
  }
  return this.http.post(`${this.uri}/dodajPohadja`,data);
}



   dodajPredmet(naziv: string,tip: any, sifra: any, fond: any, espb: any, cilj: any ,ishod: any,predavanja: any,vezbe: any,labvezbe: any, komentar: any) {
  const data = {
  naziv: naziv,
  tip: tip,
  sifra: sifra,
  fond: fond,
  espb: espb,
  cilj: cilj,
  ishod: ishod,
  predavanja: predavanja,
  vezbe: vezbe,
  labvezbe: labvezbe,
  komentar: komentar
  }
  return this.http.post(`${this.uri}/dodajPredmet`,data);

}

azurirajObavestenje(id: any,naslov: string,fajl: string,tekst: string,datum: any) {
  const data = {
    id: id,
    naslov: naslov,
    fajl: fajl,
    tekst: tekst,
    datum: datum
  }
  return this.http.post(`${this.uri}/azurirajObavestenje`,data);
}

}
