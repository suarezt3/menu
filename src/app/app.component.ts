
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



constructor(private elementRef: ElementRef) {


}

ngOnInit() {

  const nav = this.elementRef.nativeElement.querySelector('#nav');
  const abrir = this.elementRef.nativeElement.querySelector('#abrir');
  const cerrar = this.elementRef.nativeElement.querySelector('#cerrar');

  abrir.addEventListener('click', () => {
    nav.classList.add('visible');
  });

  cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
  });
}

}
