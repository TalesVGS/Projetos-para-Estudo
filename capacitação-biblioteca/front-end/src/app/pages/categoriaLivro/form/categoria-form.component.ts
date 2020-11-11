import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Categoria from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  constructor(
    private router: Router, 
    private builder: FormBuilder, 
    private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute
  ) {}

  categoriaForm: FormGroup;
  action: string;

  ngOnInit(): void {
    this.createForm();
    this.action = this.activatedRoute.snapshot.url[0].path;
    
    if(this.action == 'alterar') {
      this.setValue();
    }
  }

  setValue() {
     const id = this.activatedRoute.snapshot.url[1].path;

     this.categoriaService
     .findById(Number(id))
     .subscribe((response) => this.categoriaForm.patchValue(response));
  }

  createForm(): void {
    this.categoriaForm = this.builder.group({
      id: null,
      categoria: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }

  Cancel(): void {
    this.router.navigate(['categoria']);
  }

  Save(value: Categoria): void {
    Object.keys(this.categoriaForm.controls).forEach(field => 
      this.categoriaForm.get(field).markAllAsTouched()
      );

    if(this.categoriaForm.invalid) {
      return;
    }

    this.categoriaService
    .save(value)
    .subscribe(() => this.router.navigate(['categoria']));
  }

}  
