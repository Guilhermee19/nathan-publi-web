import { Component } from '@angular/core';
import { HeroComponent } from '../../components/metodolcw/hero/hero.component';
import { AboutScriptComponent } from '../../components/metodolcw/about-script/about-script.component';
import { DifficultyInSellingComponent } from '../../components/metodolcw/difficulty-in-selling/difficulty-in-selling.component';
import { VideoTrainingComponent } from '../../components/metodolcw/video-training/video-training.component';
import { CourseContentComponent } from '../../components/metodolcw/course-content/course-content.component';
import { TrainingComponent } from '../../components/metodolcw/training/training.component';
import { TestimonialsComponent } from '../../components/metodolcw/testimonials/testimonials.component';
import { GetToKnowMentoComponent } from '../../components/metodolcw/get-to-know-mento/get-to-know-mento.component';
import { BonusComponent } from '../../components/metodolcw/bonus/bonus.component';
import { PricesComponent } from '../../components/metodolcw/prices/prices.component';
import { GuaranteeComponent } from '../../components/metodolcw/guarantee/guarantee.component';
import { DoubtsComponent } from '../../components/metodolcw/doubts/doubts.component';
import { FaqComponent } from '../../components/metodolcw/faq/faq.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-metodolcw',
  standalone: true,
  imports: [
    HeroComponent,
    AboutScriptComponent,
    DifficultyInSellingComponent,
    VideoTrainingComponent,
    CourseContentComponent,
    TrainingComponent,
    TestimonialsComponent,
    GetToKnowMentoComponent,
    BonusComponent,
    PricesComponent,
    GuaranteeComponent,
    DoubtsComponent,
    FaqComponent,
    WhatsappComponent
  ],
  templateUrl: './metodolcw.component.html',
  styleUrl: './metodolcw.component.scss'
})
export class MetodolcwComponent {

}
