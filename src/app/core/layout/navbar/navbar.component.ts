import { Component } from '@angular/core';
import { portfolioData } from '../../../data/portfolioData';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class Navbar {
basics = portfolioData.basics;
}
