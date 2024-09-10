import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-about-script',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about-script.component.html',
  styleUrl: './about-script.component.scss'
})
export class AboutScriptComponent {

}
