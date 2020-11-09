import { Component, OnInit } from '@angular/core';
import Livro from '../Livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {
  constructor(private livroService: LivroService) { }

  livros: Livro[] = [];

  ngOnInit(): void {
    this.findAllLivros();
  }

  findAllLivros(): void {
    this.livroService.findAll()
    .subscribe((response) => (this.livros = response));
  }

  deleteById(id: number): void {
    this.livroService.deleteById(id).subscribe(()=> this.findAllLivros());
  }
}
