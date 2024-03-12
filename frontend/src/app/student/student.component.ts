import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pohadja } from '../model/pohadja.model';
import { Predmet } from '../model/predmet.model';
import { Spisak } from '../model/spisak.model';
import { Student } from '../model/student.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private podaci: PodaciService,private router: Router) { }

  ngOnInit(): void {
    this.dohvPredmete();
    this.dohvStudenta();
  }




  predmeti : Pohadja[] = [];
  predmet!: Predmet;
  username =  localStorage.getItem('korisnik')!;
  student!: Student;



  dohvPredmete() {
    this.podaci.dohvPredmete(this.username).subscribe((pohadja:Pohadja[])=>{

      if (pohadja) {
       this.predmeti = pohadja;
      }
      else {
        alert('greska');
      }
    })
  }

  detalji(p: Pohadja) {
    localStorage.setItem('predmet',p.naziv);
    this.router.navigate(['/predmeti']);
  }

  dohvStudenta() {
    this.podaci.dohvStudenta(this.username).subscribe((student: Student)=>{
      if (student) {
        this.student = student;
      } else {
        alert('greska');
      }
    })
  }

  spiskoviPrikaz(p: Pohadja) {
   localStorage.setItem('spisak',p.naziv);
   this.router.navigate(['/spiskovi']);
  }




 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}



}
