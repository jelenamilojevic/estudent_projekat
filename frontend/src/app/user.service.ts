import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  uri = 'http://localhost:4000'

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/login`,data);
  }

  registruj(username: string,password: string,ime: string, prezime: string,indeks: string,tip: any,status: any) {
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


  registrujZap(username: string,password: string,ime: string, prezime: string,adresa: string,telefon: string,vebsajt: string,podaci: any,zvanje: any,kabinet: any,status: any,slika: string) {
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

  registrujKor(username: string,password: string, tip: any,prvi: any) {
    const data = {
      username:username,
      password: password,
      tip: tip,
      prvi: prvi
    }
    return this.http.post(`${this.uri}/registrujKor`,data);
  }

  obrisiStudenta(username: string) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/obrisiStudenta`,data);
  }

  obrisiZaposlenog(username: string) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/obrisiZaposlenog`,data);
  }
  obrisiKorisnika(username: string) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/obrisiKorisnika`,data);
  }


  promenaLozinke(username: string, password: string,prvi: any) {
    const data = {
      username: username,
      password: password,
      prvi: prvi
    }
    return this.http.post(`${this.uri}/promeniLozinkuKor`,data);
  }


  promenaLozinkeStud(username: string, password: string) {
    const data = {
      username: username,
      password: password,
    }
    return this.http.post(`${this.uri}/promeniLozinkuStud`,data);
  }

  promenaLozinkeZap(username: string, password: string) {
    const data = {
      username: username,
      password: password,
    }
    return this.http.post(`${this.uri}/promeniLozinkuZap`,data);
  }

  dohvatiKorisnika(username: string) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/dohvKorisnika`,data);
  }

}
