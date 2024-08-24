import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrl: './nav-footer.component.css'
})
export class NavFooterComponent {
  currentYear: number = new Date().getFullYear();
}
