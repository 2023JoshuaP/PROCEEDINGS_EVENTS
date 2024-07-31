import { inject, Injectable } from "@angular/core";
import { Documents } from "../../shared/interfaces/documents.interface";
import { signalSlice } from 'ngxtension/signal-slice';
import { DocumentsService } from "./documents.service";
import { map, startWith, Subject, switchMap } from 'rxjs';

interface State {
    documents: Documents[];
    status: 'loading' | 'success' | 'error';
    page: number;
}

@Injectable()

export class DocumentsStateService {
    private documentsService = inject(DocumentsService);

    private initialState: State = {
        documents: [],
        status: 'loading' as const,
        page: 1,
    };

    changePage$ = new Subject<number>();

    loadDocuments$ = this.changePage$.pipe(
        startWith(1),
        switchMap((page) => this.documentsService.getDocuments(page)),
        map((documents) => ({ documents, status: 'success' as const}))
    );

    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.changePage$.pipe(map((page) => ({ page, status: 'loading' as const}))),
            this.loadDocuments$,
        ],
    });
}