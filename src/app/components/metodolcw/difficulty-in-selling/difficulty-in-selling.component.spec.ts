import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyInSellingComponent } from './difficulty-in-selling.component';

describe('DifficultyInSellingComponent', () => {
  let component: DifficultyInSellingComponent;
  let fixture: ComponentFixture<DifficultyInSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifficultyInSellingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifficultyInSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
