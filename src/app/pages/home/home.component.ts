import { Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero.component";
import { About } from "../../sections/about/about.component";
import { Skills } from "../../sections/skills/skills.component";
import { Projects } from "../../sections/projects/projects.component";
import { Education } from "../../sections/education/education.component";

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Projects, Education],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {

}
