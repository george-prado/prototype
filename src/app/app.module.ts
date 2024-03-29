import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/home/sidenav/sidenav.component';
import { ContentHeaderComponent } from './components/home/content-header/content-header.component';
import { ContentComponent } from './components/home/content/content.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { PagenavComponent } from './components/home/pagenav/pagenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContentHeaderComponent,
    ContentComponent,
    FooterComponent,
    PagenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatSidenavContainer,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }