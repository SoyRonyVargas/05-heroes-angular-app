import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Hero } from '../interfaces/hero.interface'

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private baseURL = environment.baseURL

  constructor(private httpClient: HttpClient) { 

  }

  getHeroes(): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseURL}/heroes`);
  }
  
}
