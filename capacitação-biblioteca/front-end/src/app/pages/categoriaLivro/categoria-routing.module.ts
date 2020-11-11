import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CategoriaFormComponent } from './form/categoria-form.component';
import { CategoriaListComponent } from './list/categoria-list.component';


const routes: Routes = [
    {
        path: '',
        component: CategoriaListComponent,
    },
    {
        path: 'novo',
        component: CategoriaFormComponent,
    },
    {
        path: 'alterar/:id',
        component: CategoriaFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriaRoutingModule {}
