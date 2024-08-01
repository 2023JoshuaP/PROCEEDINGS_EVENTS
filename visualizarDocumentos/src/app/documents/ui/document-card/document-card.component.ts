import { Component, input } from '@angular/core';
import { Document } from '../../../shared/interfaces/document.interface';

@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [],
  templateUrl: './document-card.component.html',
  styles: ``
})
export class DocumentCardComponent {
  document = input.required<Document>();
}
