import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.korisnik = localStorage.getItem('tipkor')!;
    if (this.korisnik == "student") {
      this.student = true;
      this.gost = false;
    } else {
      this.student = false;
      this.gost = true;
    }
  }


  student: boolean = false;
  gost: boolean = true;
  korisnik: string = "";

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }

}
