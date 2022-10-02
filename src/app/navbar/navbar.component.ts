import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public clickedHome() {
    console.log("FUCK");
    this._router.navigate(['./home']);
  }

  public clickedKonsultacje() {
    this._router.navigate(['../konsultacje']);
  }

  public clickedInfo() {
    this._router.navigate(['../info']);
  }

  public clickedKontakt() {
    this._router.navigate(['../kontakt']);
  }

  public clickedUslugi() {
    this._router.navigate(['../uslugi']);
  }

  public clickedGaleria() {
    this._router.navigate(['../galeria']);
  }
}
