import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaService } from './categoria.service';
import { CategoriaFormComponent } from './form/categoria-form.component';
import { CategoriaListComponent } from './list/categoria-list.component';

@NgModule({
    declarations: [CategoriaListComponent, CategoriaFormComponent],
    imports: [CommonModule, CategoriaRoutingModule, ReactiveFormsModule, FormsModule, SharedModule],
    providers: [CategoriaService],
})
export class CategoriaModule {}