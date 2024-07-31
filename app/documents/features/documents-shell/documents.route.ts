import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('../documents-list/documents-list.component'),
    },
    {
        path: 'documents/:id',
        loadComponent: () => import('../documents-detail/documents-detail.component'),
    },
] as Routes;