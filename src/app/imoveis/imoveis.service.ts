import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Imovel } from './imovel/imovel.model'

@Injectable()
export class ImoveisService {

  constructor(private http: Http){}

  imoveis(): Observable<Imovel[]> {
    return this.http.get('http://demo1183916.mockable.io/anuncio')
      .map(response => {
        console.log(response.json().result)
        return response.json().result
      })
  }
}
