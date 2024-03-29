import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [BrowserAnimationsModule, MatSidenavModule, MatButtonModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close sidenav', () => {
    expect(component.sidenav).toBeDefined();
    expect(component.sidenav?.opened).toBeFalsy();
    
    component.open();
    expect(component.sidenav?.opened).toBeTruthy();
    
    component.close();
    expect(component.sidenav?.opened).toBeFalsy();
  });

  it('should have default values for properties', () => {
    expect(component.openSidenavButton).toEqual(['flex', 'toggle', 'center', 'b-0', 'bold', 'bg', 'green']);
    expect(component.sidenavContent).toEqual(['flex-col', 'side-menu', 'center']);
    expect(component.menuIcons).toEqual(['flex-col', 'menu']);
    expect(component.opened).toBeFalsy();
  });
});