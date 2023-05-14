import { Injectable } from '@angular/core';
import { SobreMi } from '../model/sobre-mi';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SSobreMiService {
  URL = environment.URL + 'sobreMi/';
    
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<SobreMi[]>{
    return this.httpClient.get<SobreMi[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<SobreMi>{
    return this.httpClient.get<SobreMi>(this.URL + `detail/${id}`);
  } 
  
  public save(sobreMi: SobreMi): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', sobreMi);
  }
  
  public update(id: number, sobreMi: SobreMi): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, sobreMi);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
