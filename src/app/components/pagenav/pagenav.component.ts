import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenav',
  templateUrl: './pagenav.component.html',
  styleUrl: './pagenav.component.css'
})
export class PagenavComponent {
  currentPage = 10
  totalPages = 10
}
