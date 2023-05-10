import { Injectable } from '@angular/core';
import { Titulo } from '../model/titulo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class STituloService {

  URL = environment.URL + 'titulo/';
    
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Titulo[]>{
    return this.httpClient.get<Titulo[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<Titulo>{
    return this.httpClient.get<Titulo>(this.URL + `detail/${id}`);
  } 
  
  public save(titulo: Titulo): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', titulo);
  }
  
  public update(id: number, titulo: Titulo): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, titulo);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
