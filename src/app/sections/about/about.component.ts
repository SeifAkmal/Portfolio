import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { Observe } from '../../shared/directives/observe.directive';
import { SectionTitle } from "../../shared/ui/section-title/section-title.component";

@Component({
  selector: 'app-about',
  imports: [Observe, SectionTitle],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class About {
basics = portfolioData.basics;
}
