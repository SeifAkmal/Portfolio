import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { NgClass } from '@angular/common';
import { Observe } from '../../shared/directives/observe.directive';
import { SectionTitle } from "../../shared/ui/section-title/section-title.component";

@Component({
  selector: 'app-education',
  imports: [NgClass, Observe, SectionTitle],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class Education {
  education = portfolioData.education;
  certifications = portfolioData.certifications;
}
