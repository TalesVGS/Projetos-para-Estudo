import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LivroFormComponent } from './form/livro-form.component';
import { LivroListComponent } from './list/livro-list.component';

const routes: Routes = [
    {
        path: '',
        component: LivroListComponent,
    },
    {
        path: 'novo',
        component: LivroFormComponent,
    },
    {
        path: 'alterar/:id',
        component: LivroFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LivroRoutingModule {}
