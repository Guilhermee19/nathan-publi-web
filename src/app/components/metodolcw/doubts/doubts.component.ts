import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-doubts',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './doubts.component.html',
  styleUrl: './doubts.component.scss'
})
export class DoubtsComponent {

}
