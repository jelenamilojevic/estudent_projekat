import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  uri = 'http://localhost:4000'

  login(username, password) {
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/login`,data);
  }

  registruj(username,password,ime, prezime,indeks,tip,status) {
    const data = {
      username:username,
      password: password,
      ime: ime,
      prezime: prezime,
      indeks: indeks,
      tip: tip,
      status: status
    }
    return this.http.post(`${this.uri}/registruj`,data);
  }


  registrujZap(username,password,ime, prezime,adresa,telefon,vebsajt,podaci,zvanje,kabinet,status,slika) {
    const data = {
      username:username,
      password: password,
      ime: ime,
      prezime: prezime,
      adresa: adresa,
      telefon: telefon,
      vebsajt: vebsajt,
      podaci: podaci,
      zvanje: zvanje,
      kabinet: kabinet,
      status: status,
      slika: slika
    }
    return this.http.post(`${this.uri}/registrujZap`,data);
  }

  registrujKor(username,password, tip,prvi) {
    const data = {
      username:username,
      password: password,
      tip: tip,
      prvi: prvi
    }
    return this.http.post(`${this.uri}/registrujKor`,data);
  }

  obrisiStudenta(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/obrisiStudenta`,data);
  }

  obrisiZaposlenog(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/obrisiZaposlenog`,data);
  }
  obrisiKorisnika(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/obrisiKorisnika`,data);
  }


  promenaLozinke(username, password,prvi) {
    const data = {
      username: username,
      password: password,
      prvi: prvi
    }
    return this.http.post(`${this.uri}/promeniLozinkuKor`,data);
  }


  promenaLozinkeStud(username, password) {
    const data = {
      username: username,
      password: password,
    }
    return this.http.post(`${this.uri}/promeniLozinkuStud`,data);
  }

  promenaLozinkeZap(username, password) {
    const data = {
      username: username,
      password: password,
    }
    return this.http.post(`${this.uri}/promeniLozinkuZap`,data);
  }

  dohvatiKorisnika(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/dohvKorisnika`,data);
  }

}
