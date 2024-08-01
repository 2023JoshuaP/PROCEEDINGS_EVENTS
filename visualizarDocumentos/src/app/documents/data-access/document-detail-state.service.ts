import { inject, Injectable } from "@angular/core";
import { Document } from "../../shared/interfaces/document.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { DocumentService } from "./documents.service";
import { map, Observable, switchMap } from "rxjs";

interface State {
    document: Document | null;
    status: 'loading' | 'success' | 'error';
}

@Injectable()

export class DocumentDetailStateService {
    private documentsService = inject(DocumentService);
    private initialState: State = {
        document: null,
        status: 'loading' as const,
    };

    state = signalSlice({
        initialState: this.initialState,
        actionSources: {
            getById: (_state, $: Observable<string>) => $.pipe(
                switchMap((id) => this.documentsService.getDocument(id)),
                map(data => ({ document: data, status: 'success' as const})),
            )
        }
    });
}