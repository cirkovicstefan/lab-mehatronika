import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonografijeComponent } from './monografije.component';

describe('MonografijeComponent', () => {
  let component: MonografijeComponent;
  let fixture: ComponentFixture<MonografijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonografijeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonografijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
