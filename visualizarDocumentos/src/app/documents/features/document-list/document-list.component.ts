import { Component, inject } from '@angular/core';
import { DocumentsStateService } from '../../data-access/documents-state.service';
import { DocumentCardComponent } from '../../ui/document-card/document-card.component';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [DocumentCardComponent],
  templateUrl: './document-list.component.html',
  styles: ``,
  providers: [DocumentsStateService],
})

export default class DocumentListComponent {
  documentsState = inject(DocumentsStateService);

  changePage() {
    const page = this.documentsState.state.page() + 1;
    this.documentsState.changePage$.next(page)
  }
}
