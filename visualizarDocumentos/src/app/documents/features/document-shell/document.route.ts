import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('../document-list/document-list.component'),
    },
    {
        path: 'document/:id',
        loadComponent: () => import('../document-detail/document-detail.component'),
    },
] as Routes