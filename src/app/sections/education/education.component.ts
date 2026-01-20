import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { NgClass } from '@angular/common';
import { Observe } from '../../shared/directives/observe.directive';

@Component({
  selector: 'app-education',
  imports: [NgClass,Observe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class Education {
  education = portfolioData.education;
  certifications = portfolioData.certifications;
}
