import { Component, signal } from '@angular/core';
import { Hero } from "./sections/hero/hero.component";
import { About } from "./sections/about/about.component";
import { Skills } from "./sections/skills/skills.component";
import { Projects } from "./sections/projects/projects.component";
import { Education } from "./sections/education/education.component";
import { Navbar } from './layout/navbar/navbar.component';
import { Footer } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ Navbar, Footer, Hero, About, Skills, Projects, Education],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
