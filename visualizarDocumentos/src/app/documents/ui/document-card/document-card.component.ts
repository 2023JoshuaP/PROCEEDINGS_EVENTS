import { Component, input } from '@angular/core';
import { Document } from '../../../shared/interfaces/document.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './document-card.component.html',
  styles: ``
})
export class DocumentCardComponent {
  document = input.required<Document>();
}
