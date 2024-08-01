import { inject, Injectable } from "@angular/core";
import { Document } from "../../shared/interfaces/document.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { DocumentService } from "./documents.service";
import { catchError, map, of, startWith, Subject, switchMap } from "rxjs";

interface State {
    documents: Document[];
    status: 'loading' | 'success' | 'error';
    page: number;
}

@Injectable()

export class DocumentsStateService {
    private documentsService = inject(DocumentService);
    private initialState: State = {
        documents: [],
        status: 'loading' as const,
        page: 1,
    };

    changePage$ = new Subject<number>();

    loadDocuments$ = this.changePage$.pipe(
        startWith(1),
        switchMap((page) => this.documentsService.getDocuments(page)),
        map((documents) => ({ documents, status: 'success' as const })),
        catchError(() => {
            return of({
                documents: [],
                status: 'error' as const,
            });
        }),
    );

    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.changePage$.pipe(map((page) => ({ page, status: 'loading' as const }))),
            this.loadDocuments$,
        ],
    });
}