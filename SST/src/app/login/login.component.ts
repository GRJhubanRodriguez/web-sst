import { Component, OnInit, ChangeDetectionStrategy, Input  } from '@angular/core';
//Importacion de servicios
import { ConsultaComunService } from './service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Variables donde se almacenan los datos obtenidos por el servicio
  user:any;
  password:any;
  
  constructor(private _serviceUsuarios:ConsultaComunService) {
     //Recuperar los datos del servicio para obtener los usuarios.
     _serviceUsuarios.obtenerUsuarios()
     .then(data=>{
       this.user = data;
       this.password = data;
     })
     .catch(err=>{
       console.log(err);
     })
   };

  ngOnInit(): void {
  }

}

