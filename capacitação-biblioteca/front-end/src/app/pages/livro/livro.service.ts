import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Livro from './Livro';

@Injectable({
    providedIn: 'root',
})
export class LivroService {

    protected url = `http://localhost:8080/livro`;

    constructor(private http: HttpClient) {}

    findAll(): Observable<Livro[]> {
        return this.http.get<Livro[]>(this.url);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

    save(data: Livro): Observable<Livro> {
        if(data.id) {
            return this.http.put<Livro>(this.url, data);
        } else {
            return this.http.post<Livro>(this.url, data);
        }
    }

    findById(id: number): Observable<Livro> {
        return this.http.get<Livro>(`${this.url}/${id}`);
    }
}