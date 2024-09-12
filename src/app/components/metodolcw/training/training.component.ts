import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {

  access = [
    {
      title: 'Scripts prontos',
      description: 'Tenha acesso a scripts validados para você adaptar para o seu nicho',
    },
  ]

  moveScrollScreen(div_str: string) {
		let value_top = 300
    const section = document.getElementById(div_str);
    if(!section) return;

    var diff = (section.offsetTop-window.scrollY) - value_top;

    if (Math.abs(diff)>1)
      window.scrollBy({top: diff, behavior: 'smooth'})
  }

}
