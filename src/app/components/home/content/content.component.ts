import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  post = ['flex', 'post-margins']
  date = ['flex-col', 'date-margins']
  article = ['flex-col', 'content-width', 'white']
  title = ['green', 'title']
  author = ['mb', 'title-font', 'sm-text', 'indent']
  tagSection = ['btn', 'mb', 'end-margin']
  tag = ['green-secundary', 'bg']
}
