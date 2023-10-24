import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CardType } from '../../model/card.model';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent, CommonModule],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() customClass = '';
  @Output() addEvent = new EventEmitter();
  CardType = CardType;
  @ContentChild('listView') listView!: TemplateRef<any>;
  addNewItem() {
    this.addEvent.emit();
  }
}
