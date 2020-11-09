import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LivroListComponent } from './list/livro-list.component';

const routes: Routes = [
    {
        path: '',
        component: LivroListComponent,
    },
    {
        path: 'novo',
        component: LivroListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LivroRoutingModule {}
