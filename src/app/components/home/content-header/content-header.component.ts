import { Component } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrl: './content-header.component.css'
})
export class ContentHeaderComponent {
  contentHeader = ['flex', 'center']
  contentHeaderText = ['border', 'white']
}
