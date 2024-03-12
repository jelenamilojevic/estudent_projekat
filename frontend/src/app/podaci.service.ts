import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Obavestenje } from './model/obavestenje.model';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Vesti } from './model/vesti.model';

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

  dohvNastavno(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/dohvNastavno`,data);
  }

  dohvPredmete(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/dohvPredmete`,data);
  }

  dohvPredmetFilter(naziv) {
    const data = {
      naziv: naziv
    }
    return this.http.post(`${this.uri}/dohvPredmetFilter`,data);
  }


  dohvStudenta(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/dohvStudenta`,data);
  }

  dohvDrziNaziv(naziv) {
    const data = {
      naziv: naziv
    }
    return this.http.post(`${this.uri}/dohvDrziNaziv`,data);
  }

  dohvDrziIme(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/dohvDrziIme`,data);
  }


dohvObavestenja(naziv) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/dohvObavestenja`,data);
}


dohvObavestenje(id) {
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


dohvPredavanja(naziv) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/dohvPredavanja`,data);
}

dohvVezbe(naziv) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/dohvVezbe`,data);
}

dohvIspitna(naziv) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/dohvIspitna`,data);
}

dohvLabVezbe(naziv) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/dohvLab`,data);
}


dohvProjekat(naziv) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/dohvProjekat`,data);
}





azurirajZaposlenog(username, adresa, telefon, podaci, vebsajt, kabinet) {
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


azurirajZaposlenogAdmin(username,password,ime,prezime, adresa, telefon, podaci, vebsajt, kabinet,zvanje,status,slika) {
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


azurirajStudentaAdmin(username,password,ime,prezime, indeks,tip, status) {
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

azurirajPredmet(naziv, sifra, tip, espb, cilj, ishod) {
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

azurirajPredmetAdmin(naziv,tip, sifra, fond, espb, cilj, ishod,predavanja,vezbe,labvezbe, komentar) {
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


obrisiPredavanja(id) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/obrisiPredavanja`,data);
}

obrisiVezbe(id) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/obrisiVezbe`,data);
}

obrisiLab(id) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/obrisiLab`,data);
}

obrisiIspitna(id) {
  const data = {
    id: id
  }
  return this.http.post(`${this.uri}/obrisiIspitna`,data);
}

obrisiPredmet(naziv) {
  const data = {
    naziv: naziv
  }
  return this.http.post(`${this.uri}/obrisiPredmet`,data);
}


dodajObavestenje(naziv,tekst,datum,id, autor, naslov,fajl) {
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


dodajDrzi(username,naziv,grupa) {
  const data = {
   username: username,
   naziv:naziv,
   grupa: grupa
  }
  return this.http.post(`${this.uri}/dodajDrzi`,data);
}



dodajPohadja(username,naziv,grupa) {
  const data = {
   username: username,
   naziv:naziv,
   grupa: grupa
  }
  return this.http.post(`${this.uri}/dodajPohadja`,data);
}



   dodajPredmet(naziv,tip, sifra, fond, espb, cilj, ishod,predavanja,vezbe,labvezbe, komentar) {
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

azurirajObavestenje(id,naslov,fajl,tekst,datum) {
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
