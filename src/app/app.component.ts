import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home.component";
import { Navbar } from "./core/layout/navbar/navbar.component";
import { Footer } from "./core/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
