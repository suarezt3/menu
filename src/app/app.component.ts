
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

public nav: any;
// public abrir: any;
// public cerrar: any;


constructor(private elementRef: ElementRef) {}



ngOnInit() {

 this.nav = this.elementRef.nativeElement.querySelector('#nav');
  // const abrir = this.elementRef.nativeElement.querySelector('#abrir');
  // const cerrar = this.elementRef.nativeElement.querySelector('#cerrar');

  // abrir.addEventListener('click', () => {
  //   nav.classList.add('visible');
  // });

  // cerrar.addEventListener('click', () => {
  //   nav.classList.remove('visible');
  // });

 }

 abrir() {
  this.nav.classList.add('visible');
 }

 cerrar() {
  this.nav.classList.remove('visible')
 }

}
