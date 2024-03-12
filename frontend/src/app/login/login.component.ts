import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
   this.username="";
   this.password="";
   this.poruka = "";
  }


username: string = "";
password: string = "";

patternStudent = /([a-z]){2}([1-2]){1}([0-9]){5}([dmp]){1}@student.etf.rs/;
patternZaposleni = /(\w){2,15}@etf.bg.ac.rs/;

poruka = localStorage.getItem('promena');


login() {
  if (this.username =="" || this.password == "") {
    alert("Popunite sva polja!");
  }
  else {
 this.userService.login(this.username, this.password).subscribe((korisnik: Korisnik)=> {
   if (korisnik) {

    localStorage.setItem('korisnik',korisnik.username);

    if (korisnik.prvi == "nije") {

      if (korisnik.tip == "admin" && this.patternZaposleni.test(this.username)) {
        localStorage.setItem('tipkor',"admin");
        this.router.navigate(['/admin']);
        }
       else if (korisnik.tip == "zaposleni" && this.patternZaposleni.test(this.username)) {
        localStorage.setItem('tipkor',"zaposleni");
         this.router.navigate(['/zaposlenreg']);
        }
       else if (korisnik.tip == "student" && this.patternStudent.test(this.username)) {
         localStorage.setItem('tipkor',"student");
         this.router.navigate(['/student']);
        }
       else {
         alert("neispravan username");
       }

    } else {
      this.router.navigate(['/promenalozinke']);
    }

   }
   else {
     alert('losi podaci');
   }
 })

} //kraj else
}

//sampleFormControl = new FormControl('', [
//  validateInput
//]);

//<ng-image-slider [images]="imageObject" #nav manageImageRatio='true'></ng-image-slider> dodaj image slider

imageObject: Array<object> = [{
  image: 'assets/slike/slika1.jpg',
  thumbImage: 'assets/slike/slika1.jpg',
  alt: 'slika 1',
  title: 'zgrada fakulteta'
}, {
image: 'assets/slike/slika2.jpg',
thumbImage: 'assets/slike/slika2.jpg',
alt: 'slika 2',
title: 'predavanja'
}, {
image: 'assets/slike/slika3.jpg',
  thumbImage: 'assets/slike/slika3.jpg',
  alt: 'slika 3',
  title: 'hodnik'
}, {
image: 'assets/slike/slika4.jpg',
thumbImage: 'assets/slike/slika4.jpg',
alt: 'slika 4',
title: 'sportski tim'
}, {
image: 'assets/slike/slika5.jpg',
thumbImage: 'assets/slike/slika5.jpg',
alt: 'slika 5',
title: 'hodnik 2'
},{
image: 'assets/slike/slika6.jpg',
thumbImage: 'assets/slike/slika6.jpg',
alt: 'slika 6',
title: 'racunski centar'
}
];

}


function validateInput(c: FormControl) {
  let  patternStudent = /([a-z]){2}([1-2]){1}([0-9]){5}([dmp]){1}@student.etf.rs/;
  let  patternZaposleni = /(\w){2,15}@etf.bg.ac.rs/;
  return (patternStudent.test(c.value) || patternZaposleni.test(c.value)) ? null : {
    validateInput: {
      valid: false
    }
  };
}
