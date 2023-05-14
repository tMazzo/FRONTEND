import { Injectable } from '@angular/core';
import { Contacto } from '../model/contacto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SContactoService {
  URL = environment.URL + 'contacto/';
    
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<Contacto>{
    return this.httpClient.get<Contacto>(this.URL + `detail/${id}`);
  } 
  
  public save(contacto: Contacto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', contacto);
  }
  
  public update(id: number, contacto: Contacto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, contacto);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
