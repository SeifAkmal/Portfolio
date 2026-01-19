import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { Observe } from '../../core/directives/observe.directive';

@Component({
  selector: 'app-hero',
  imports: [Observe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class Hero {
  basics = portfolioData.basics;
}
