import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./documents/features/documents-shell/documents.route'),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
