import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({providedIn: 'root'})
export class ApiService {
    private baseUrl = 'https://dummyjson.com';

    constructor(private http:HttpClient) {}

    getProducts(): Observable<any>  {
       return  this.http.get(`${this.baseUrl}/products`);
    }

    getProductById(id: number): Observable<any>  {
        return this.http.get(`${this.baseUrl}/products/${id}`);
    }
}