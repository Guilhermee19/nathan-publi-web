import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
