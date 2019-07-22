import{Injectable} from '@angular/core';
import{environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
const API_URL=environment.apiUrl;
const API_Key=environment.apikey;
@Injectable({
    providedIn:'root'
})
    export class newsApiService
    {
        currentArticle:any;
        constructor(private httpclient:HttpClient){}
        getData(url){
            return this.httpclient.get(`${API_URL}/${url}&apikey=${API_Key}`);
        }
       
    }