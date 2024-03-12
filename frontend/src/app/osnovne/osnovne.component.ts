import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-osnovne',
  templateUrl: './osnovne.component.html',
  styleUrls: ['./osnovne.component.css']
})
export class OsnovneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.korisnik = localStorage.getItem('tipkor');
    if (this.korisnik == "student") {
      this.student = true;
      this.gost = false;
    } else {
      this.student = false;
      this.gost = true;
    }
  }

  prikazSi = false;
  prikazRti = false;
  prikazOstali = false;

  student: boolean = false;
  gost: boolean = true;
  korisnik: string;

  prikazi() {
    this.router.navigate(['/osnovnesi']);
  }

  sakrij() {
    this.prikazSi = false;
  }

  prikaziRti() {
    this.router.navigate(['/osnovnerti']);
  }

  sakrijRti() {
    this.prikazRti = false;
  }

  prikaziOstali() {
    this.router.navigate(['/osnovneost']);
  }

  sakrijOstali() {
    this.prikazOstali = false;
  }

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }

}
