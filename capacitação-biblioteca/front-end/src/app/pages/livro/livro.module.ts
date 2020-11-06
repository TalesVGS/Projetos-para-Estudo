import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LivroRoutingModule } from './livro-routing.module';
import { LivroComponent } from './livro.component';

@NgModule({
    declarations: [LivroComponent],
    imports: [CommonModule, LivroRoutingModule],
    providers: [],
})
export class LivroModule {}