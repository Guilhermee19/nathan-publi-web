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
  moveScrollScreen(div_str: string) {
		let value_top = 300
    const section = document.getElementById(div_str);
    if(!section) return;

    var diff = (section.offsetTop-window.scrollY) - value_top;

    if (Math.abs(diff)>1)
      window.scrollBy({top: diff, behavior: 'smooth'})
  }
}
