import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { Documents } from "../../shared/interfaces/documents.interface";

const LIMIT = 4;

@Injectable({
    providedIn: 'root',
})

export class DocumentsService extends BaseHttpService {
    getDocuments(page: number):Observable<Documents[]> {
        return this.http.get<any[]>(`${this.apiUrl}/products`, {
            params: {
                limit: page * LIMIT,
            },
        });
    }

    getDocument(id: string): Observable<Documents> {
        return this.http.get<Documents>(`${this.apiUrl}/products/${id}`);
    }
}