import { Component, inject } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { Observe } from '../../shared/directives/observe.directive';
import { Theme } from '../../core/services/theme.service';

@Component({
  selector: 'app-hero',
  imports: [Observe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class Hero {
  basics = portfolioData.basics;
  theme = inject(Theme);
}
