import { Component, effect, inject, input } from '@angular/core';
import { DocumentsDetailStateService } from '../../data-access/documents-detail-state.service';

@Component({
  selector: 'app-documents-detail',
  standalone: true,
  imports: [],
  templateUrl: './documents-detail.component.html',
  styles: ``,
  providers: [DocumentsDetailStateService],
})

export default class DocumentsDetailComponent {
  documentsDetailState = inject(DocumentsDetailStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.id());
      this.documentsDetailState.getById(this.id())
    });
  }
}
