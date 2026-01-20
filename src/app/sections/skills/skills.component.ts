import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { Observe } from '../../shared/directives/observe.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [Observe, NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class Skills {
  skills = portfolioData.skills.technical;
}
