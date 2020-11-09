import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LivroListComponent } from './list/livro-list.component';
import { LivroRoutingModule } from './livro-routing.module';
import { LivroService } from './livro.service';

@NgModule({
    declarations: [LivroListComponent],
    imports: [CommonModule, LivroRoutingModule],
    providers: [LivroService],
})
export class LivroModule {}