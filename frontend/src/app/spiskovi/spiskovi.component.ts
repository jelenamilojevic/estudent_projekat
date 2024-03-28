import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spisak } from '../model/spisak.model';
import { PodaciService } from '../podaci.service';

@Component({
  selector: 'app-spiskovi',
  templateUrl: './spiskovi.component.html',
  styleUrls: ['./spiskovi.component.css']
})
export class SpiskoviComponent implements OnInit {

  constructor(private router: Router, private podaci: PodaciService) { }

  ngOnInit(): void {
    
  }

  naziv = localStorage.getItem('spisak');

 


    
 logout() {
  localStorage.setItem('korisnik',"");
  localStorage.setItem('tipkor',"");
  this.router.navigate(['/login']);
}


}
