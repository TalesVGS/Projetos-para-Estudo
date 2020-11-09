import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivroFormComponent } from './form/livro-form.component';
import { LivroListComponent } from './list/livro-list.component';
import { LivroRoutingModule } from './livro-routing.module';
import { LivroService } from './livro.service';

@NgModule({
    declarations: [LivroListComponent, LivroFormComponent],
    imports: [CommonModule, LivroRoutingModule, ReactiveFormsModule, FormsModule],
    providers: [LivroService],
})
export class LivroModule {}