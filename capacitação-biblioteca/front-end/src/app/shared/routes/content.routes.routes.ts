import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
    {
        path: 'livro',
        loadChildren: () =>
            import('../../pages/livro/livro.module').then((m) => m.LivroModule),     
    },
];