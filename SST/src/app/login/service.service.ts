import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaComunService {

  constructor(private http: HttpClient) { }

  //Declaramos la funcion para recuperar los datos procesados por el constructor de la clase
  public obtenerUsuarios()
  {
    return new Promise(
      resolve=>{
        this.http.get('validate.php')
        .subscribe(
        data => resolve(data)
        )
      }
    )
  };
}