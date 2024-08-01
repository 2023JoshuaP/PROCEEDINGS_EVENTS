import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'documents',
        loadChildren: () =>
            import('./documents/features/document-shell/document.route'),
    },
    {
        path: '**',
        redirectTo: 'documents',
    }
];
