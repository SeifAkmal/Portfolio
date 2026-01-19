import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { NgClass } from '@angular/common';
import { Observe } from '../../core/directives/observe.directive';

@Component({
  selector: 'app-projects',
  imports: [NgClass ,Observe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class Projects {
  projects = portfolioData.projects;
}
