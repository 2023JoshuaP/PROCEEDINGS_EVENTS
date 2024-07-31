import { inject, Injectable } from "@angular/core";
import { Documents } from "../../shared/interfaces/documents.interface";
import { signalSlice } from 'ngxtension/signal-slice';
import { DocumentsService } from "./documents.service";
import { map, Observable, switchMap } from "rxjs";

interface State {
    documents: Documents | null;
    status: 'loading' | 'success' | 'error';
}

@Injectable()

export class DocumentsDetailStateService {
    private documentsService = inject(DocumentsService);

    private initialState: State = {
        documents: null,
        status: 'loading' as const,
    };

    state = signalSlice({
        initialState: this.initialState,
        actionSources: {
            getById: (_state, $: Observable<string>) => $.pipe(
                switchMap((id) => this.documentsService.getDocument(id)),
                map(data => ({ documents: data, status: 'success' as const})),
            )
        },
    });
}