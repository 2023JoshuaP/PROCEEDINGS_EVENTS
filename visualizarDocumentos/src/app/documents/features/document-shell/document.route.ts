import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('../document-list/document-list.component'),
    },
] as Routes