import { effect, Injectable, signal } from '@angular/core';
const STORAGE_KEY = 'theme';
@Injectable({
  providedIn: 'root',
})
export class Theme {
  // true = light | false = dark (default)
  private readonly _isLight = signal<boolean>(this.getInitialTheme());

  readonly isLight = this._isLight.asReadonly();

  constructor() {
    effect(() => {
      const light = this._isLight();

      document.body.classList.toggle('light', light);
      localStorage.setItem(STORAGE_KEY, light ? 'light' : 'dark');
    });
  }

  toggleTheme() {
    this._isLight.update((v) => !v);
  }

  getInitialTheme(): boolean {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'light';
  }
}
