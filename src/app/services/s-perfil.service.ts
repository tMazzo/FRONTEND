import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Perfil } from '../model/perfil';
@Injectable({
  providedIn: 'root'
})
export class SPerfilService {
  URL = environment.URL + 'perfil/';
    
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Perfil[]>{
    return this.httpClient.get<Perfil[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<Perfil>{
    return this.httpClient.get<Perfil>(this.URL + `detail/${id}`);
  } 
  
  public save(perfil: Perfil): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', perfil);
  }
  
  public update(id: number, perfil: Perfil): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, perfil);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
