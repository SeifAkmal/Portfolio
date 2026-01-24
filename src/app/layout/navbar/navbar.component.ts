import { Component, HostListener, signal, ElementRef, inject } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { Theme } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class Navbar {
  basics = portfolioData.basics;
  isMenuOpen = signal(false);
  elementRef = inject(ElementRef);
  theme = inject(Theme);

  openMenu() {
    this.isMenuOpen.set(true);
  }
  closeMenu() {
    this.isMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeMenu();
    }
  }
}
