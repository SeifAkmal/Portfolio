import { Component, input } from '@angular/core';
import { Observe } from '../../directives/observe.directive';

@Component({
  selector: 'app-section-title',
  imports: [Observe],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitle {
  title = input();
  subtitle = input();
}
