import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemGroupComponent } from './navbar-item-group.component';

describe('NavbarItemGroupComponent', () => {
  let component: NavbarItemGroupComponent;
  let fixture: ComponentFixture<NavbarItemGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarItemGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
