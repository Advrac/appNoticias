import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

const apikey = environment.apiKey;
const apiurl = environment.apiurl;

 const headers = new HttpHeaders({
   'X-Api-Key': apikey
 })

 

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  
  headlinespage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }
  
  private ejecutarQuery<T>(query : string){
    query = apiurl + query;
    return this.http.get<T>(query);
    
  }


  getTopHeadlines() {
    this.headlinespage++;
    
  var cadena = `/top-headlines?country=us&page=${this.headlinespage}&apiKey=${apikey}`;
   return this.ejecutarQuery<RespuestaTopHeadlines>(cadena);
    
    //return this.http.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5fc1db2f8d394f38baeca9ea625c2b22')
    
  }
  getTopHeadlinesCategoria(categoria:string){
    if(this.categoriaActual === categoria){
      this.categoriaPage++; 
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }
    var cadena = `/top-headlines?country=us&category=${categoria}&page${this.categoriaPage}&apiKey=${apikey}`;
    return this.ejecutarQuery<RespuestaTopHeadlines>(cadena);
  }
}