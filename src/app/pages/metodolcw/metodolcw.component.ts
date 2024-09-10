import { Component } from '@angular/core';
import { HeroComponent } from '../../components/metodolcw/hero/hero.component';

@Component({
  selector: 'app-metodolcw',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './metodolcw.component.html',
  styleUrl: './metodolcw.component.scss'
})
export class MetodolcwComponent {

}
