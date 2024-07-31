import { Component, inject } from '@angular/core';
import { DocumentsStateService } from '../../data-access/documents-state.service';
import { DocumentsCardComponent } from '../../ui/documents-card/documents-card.component';

@Component({
  selector: 'app-documents-list',
  standalone: true,
  imports: [DocumentsCardComponent],
  templateUrl: './documents-list.component.html',
  styles: ``,
  providers: [DocumentsStateService],
})

export default class DocumentsListComponent {
  documentsState = inject(DocumentsStateService);

  changePage() {
    const page = this.documentsState.state.page() + 1;
    this.documentsState.changePage$.next(page);
  }
}
