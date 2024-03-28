import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenav',
  templateUrl: './pagenav.component.html',
  styleUrl: './pagenav.component.css'
})
export class PagenavComponent {
  currentPage = 2;
  totalPages = 10;

  btn = ['p-0', 'b-0', 'bg', 'green'];
  paginationText = ['green', 'sm-text'];
  pagination = ['flex-col', 'pagenav-margins', 'center'];
}
