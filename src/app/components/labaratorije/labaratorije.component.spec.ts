import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabaratorijeComponent } from './labaratorije.component';

describe('LabaratorijeComponent', () => {
  let component: LabaratorijeComponent;
  let fixture: ComponentFixture<LabaratorijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabaratorijeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabaratorijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
