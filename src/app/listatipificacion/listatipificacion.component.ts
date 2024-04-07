import { Component, OnInit } from '@angular/core';
import { tipificacion } from '../models/tipificacion';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-listatipificacion',
  templateUrl: './listatipificacion.component.html',
  styleUrls: ['./listatipificacion.component.css']
})
export class ListatipificacionComponent implements OnInit {
  tipificacion: tipificacion ={
  };

  datos: any = [];

  constructor(private tipificacionesservice: ServicesService ) { 

  }

  ngOnInit(): void {
  this.getDatos();
}


getDatos(){
  this.tipificacionesservice.envio().subscribe(
    res => {
      this.datos =res;
   },
    err => console.log(err)
  )
}

}