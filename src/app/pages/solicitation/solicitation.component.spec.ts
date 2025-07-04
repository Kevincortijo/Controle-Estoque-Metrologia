import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitation } from './solicitation.component';

describe('Solicitation', () => {
  let component: Solicitation;
  let fixture: ComponentFixture<Solicitation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solicitation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solicitation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
