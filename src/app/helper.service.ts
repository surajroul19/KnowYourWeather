import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private readonly http:HttpClient) { }

  getDetailsByCityName(cityName){
    return this.http.get(`${environment.apiUrl}/weather?q=${cityName}&appid=3f0d773b5768bcc63cc380f16a8a7a57&units=metric`)
  }
}
