import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Categoria from './categoria';

@Injectable({
    providedIn: 'root',
})
export class CategoriaService {

    protected url = `http://localhost:8080/categoria`;

    constructor(private http: HttpClient) {}

    findAll(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.url);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

    save(data: Categoria): Observable<Categoria> {
        if(data.id) {
            return this.http.put<Categoria>(this.url, data);
        } else {
            return this.http.post<Categoria>(this.url, data);
        }
    }

    findById(id: number): Observable<Categoria> {
        return this.http.get<Categoria>(`${this.url}/${id}`);
    }
}