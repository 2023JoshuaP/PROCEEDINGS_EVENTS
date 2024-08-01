import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { Document } from "../../shared/interfaces/document.interface";

const LIMIT = 4;

@Injectable({
    providedIn: 'root'
})

export class DocumentService extends BaseHttpService{
    getDocuments(page: number):Observable<Document[]> {
        return this.http.get<any[]>(`${this.apiUrl}/products`, {
            params: {
                limit: page * LIMIT,
            },
        });
    }
}