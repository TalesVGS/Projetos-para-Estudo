import { Component, OnInit } from '@angular/core';
import Categoria from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  constructor(private categoriaService: CategoriaService) { }

  categorias: Categoria[] = [];

  ngOnInit(): void {
    this.findAllCategoria();
  }

  findAllCategoria(): void {
    this.categoriaService.findAll()
    .subscribe((response) => (this.categorias = response));
  }

  deleteById(id: number): void {
    this.categoriaService.deleteById(id).subscribe(()=> this.findAllCategoria());
  }
}

