import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footer = ['bold', 'center', 'dark-green', 'sm-text']

  currentYear = new Date().getUTCFullYear()
}
