import { Component, effect, inject, input } from '@angular/core';
import { DocumentDetailStateService } from '../../data-access/document-detail-state.service';

@Component({
  selector: 'app-document-detail',
  standalone: true,
  imports: [],
  templateUrl: './document-detail.component.html',
  styles: ``,
  providers: [DocumentDetailStateService],
})

export default class DocumentDetailComponent {
  documentDetailState = inject(DocumentDetailStateService).state;
  id = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.id());
      this.documentDetailState.getById(this.id())
    })
  }
}
