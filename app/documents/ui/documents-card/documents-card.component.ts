import { Component, input } from '@angular/core';
import { Documents } from '../../../shared/interfaces/documents.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-documents-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './documents-card.component.html',
  styles: ``
})

export class DocumentsCardComponent {
  document = input.required<Documents>();
}
