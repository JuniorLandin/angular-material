import { Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 60;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  public popText = false;
  public applyShadows = false;

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
    .pipe(
      map(() => content.scrollTop)
    )
    .subscribe({
      next: (value: number) => this.determineHeader(value)
    })
  }

  determineHeader(top: number) {
    this.popText = top >= TEXT_LIMIT;
    this.applyShadows = top >= SHADOW_LIMIT;
    
  }

}
