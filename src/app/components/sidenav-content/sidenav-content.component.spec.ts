import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavContent } from './sidenav-content.component';

describe('SidenavContent', () => {
  let component: SidenavContent;
  let fixture: ComponentFixture<SidenavContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
