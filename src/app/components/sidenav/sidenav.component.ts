import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  opened = false;

open() {
  if (this.sidenav && !this.sidenav.opened){
    this.sidenav.open()
  }
}


  close() {
    if (this.sidenav && this.sidenav.opened) {
      this.sidenav.close()
    }
  }
}
