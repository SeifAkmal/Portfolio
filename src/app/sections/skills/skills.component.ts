import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { Observe } from '../../shared/directives/observe.directive';
import { NgClass } from '@angular/common';
import { SectionTitle } from "../../shared/ui/section-title/section-title.component";

@Component({
  selector: 'app-skills',
  imports: [Observe, NgClass, SectionTitle],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class Skills {
  skills = portfolioData.skills.technical;
}
