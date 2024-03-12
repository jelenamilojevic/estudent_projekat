import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student.model';
import { PodaciService } from '../podaci.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminstud',
  templateUrl: './adminstud.component.html',
  styleUrls: ['./adminstud.component.css']
})
export class AdminstudComponent implements OnInit {

  constructor(private podaci: PodaciService, private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.dohvStudente();
  }


  studenti: Student[];
  ur: Student;
  izb: Student;
  

  dohvStudente() {
    this.podaci.dohvSveStudente().subscribe((data: Student[])=>{
      this.studenti = data;
    })
  }

  uredi(st: Student) {
   this.ur = new Student();
   this.ur.username = st.username;
   this.ur.password = st.password;
   this.ur.ime = st.ime;
   this.ur.prezime = st.prezime;
   this.ur.indeks = st.indeks;
   this.ur.tip = st.tip;
   this.ur.status = st.status;
   
  }

  izbrisi(st: Student) {
    this.izb = st;
    this.userService.obrisiStudenta(st.username).subscribe(ob=> {
      if (ob['user']== 'ok') {
        this.dohvStudente();
        alert('obrisano');
      }
    })
    this.userService.obrisiKorisnika(st.username).subscribe(ob=> {
      if (ob['user']== 'ok') {
        alert('obrisano2');
      }
    })
  }


  urediStud() {
      this.podaci.azurirajStudentaAdmin(this.ur.username, this.ur.password,
        this.ur.ime, this.ur.prezime, this.ur.indeks, this.ur.tip,
        this.ur.status).subscribe(ob=> {
            if (ob['poruka']=='OK') {
              alert('azuriran');
            }
        })
        this.dohvStudente();
   
  }

  logout() {
    localStorage.setItem('korisnik',"");
    localStorage.setItem('tipkor',"");
    this.router.navigate(['/login']);
  }
 

}
