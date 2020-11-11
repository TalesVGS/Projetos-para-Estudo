import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Categoria from '../../categoriaLivro/categoria';
import { CategoriaService } from '../../categoriaLivro/categoria.service';
import Livro from '../Livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {
  constructor(
    private router: Router, 
    private builder: FormBuilder, 
    private livroService: LivroService,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService
    ) {}

  livroForm: FormGroup;
  action: string;
  categorias: Categoria[] = [];

  ngOnInit(): void {
    this.createForm();
    this.action = this.activatedRoute.snapshot.url[0].path;
    
    if(this.action == 'alterar') {
      this.setValue();
    }

    this.categoriaService.findAll().subscribe(response => {
      this.categorias = response
    });
  }

  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  setValue() {
     const id = this.activatedRoute.snapshot.url[1].path;

     this.livroService
     .findById(Number(id))
     .subscribe((response) => this.livroForm.patchValue(response));
  }

  createForm(): void {
    this.livroForm = this.builder.group({
      id: null,
      titulo: [null, [Validators.required, Validators.maxLength(120)]],
      autor: [null, [Validators.required, Validators.maxLength(120)]],
      isbn: [null, [Validators.required, Validators.maxLength(13)]],
      categoria: [null, [Validators.required, Validators.maxLength(120)]]
    });
  }

  justNumbers(event): void {
    const { value } = event.target;
    this.livroForm.get('isbn')
    .setValue(value.replace(/\D/g, ''));
  }

  Cancel(): void {
    this.router.navigate(['livro']);
  }

  Save(value: Livro): void {
    Object.keys(this.livroForm.controls).forEach(field => 
      this.livroForm.get(field).markAllAsTouched()
      );

    if(this.livroForm.invalid) {
      return;
    }

    this.livroService
    .save(value)
    .subscribe(() => this.router.navigate(['livro']));
  }

}
