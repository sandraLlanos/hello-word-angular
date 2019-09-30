import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  frase: any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  };
  mostrarcard:boolean = true;
  personajes: string[] = ["Spiderman", "Venom", "Dr. Octupus"];

  constructor() {  }

  mostrar(){
    this.mostrarcard = !this.mostrarcard;
  }
 
  ngOnInit() {
  }

}
