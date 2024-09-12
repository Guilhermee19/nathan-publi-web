import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-content',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.scss'
})
export class CourseContentComponent {

  access = [
    {
      title: 'Scripts prontos',
      description: 'Tenha acesso a scripts validados para você adaptar para o seu nicho',
    },
    {
      title: 'O que são scripts',
      description: 'Aprenda o conceito do que são scripts de alta conversão',
    },
    {
      title: 'Como criar seu próprio script',
      description: 'Aprenda como criar scripts de acordo com seu nicho',
    },
    {
      title: 'Objeções',
      description: 'A venda começa na objeção, saiba como fazer com que seu cliente fale suas objeções',
    },
    {
      title: 'Como quebrar objeções',
      description: 'Chega de não saber o que responder, quebre objeções e não perca a venda',
    },
    {
      title: 'Técnicas de vendas',
      description: 'Venda não é sorte, é técnica',
    },
    {
      title: 'Como ter um WhatsApp profissional',
      description: 'Aprenda a como configurar o seu WhatsApp de forma profissional',
    },
    {
      title: 'Configurando seu WhatsApp na prática',
      description: 'Saiba como fazer a configuração do WhatsApp Business',
    },
    {
      title: 'Mentalidade',
      description: 'Entenda a mentalidade de quem trabalha nesse mercado há 6 anos e já faturou alguns milhões',
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
