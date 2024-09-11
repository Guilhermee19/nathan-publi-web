import { Component, Input } from '@angular/core';
import { IconModule } from '../../directives/icon.module';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [IconModule],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent {
  @Input() link = '';

}
