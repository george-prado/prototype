import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/home/content/content.component';
import { ContentHeaderComponent } from './components/home/content-header/content-header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { PagenavComponent } from './components/home/pagenav/pagenav.component';
import { SidenavComponent } from './components/home/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: '', component: ContentComponent },
      { path: 'content-header', component: ContentHeaderComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'pagenav', component: PagenavComponent },
      { path: 'sidenav', component: SidenavComponent },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
