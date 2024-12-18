import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Cidade } from './cidade';

@Injectable({
  providedIn: 'root'
}) 
export class CidadeService {
  private API='http://servicodados.ibge.gov.br/api/v1/localidades/estados/'

  constructor(private http: HttpClient) {    
  }

  buscarCidade(): Observable<any> {
    return this.http.get<any>(`${this.API}/24/municipios`)
  }
}
