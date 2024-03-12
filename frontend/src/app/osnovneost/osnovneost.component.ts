import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-osnovneost',
  templateUrl: './osnovneost.component.html',
  styleUrls: ['./osnovneost.component.css']
})
export class OsnovneostComponent implements OnInit {

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

  student: boolean = false;
  gost: boolean = true;
  korisnik: string;

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }

}
