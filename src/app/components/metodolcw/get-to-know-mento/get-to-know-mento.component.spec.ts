import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetToKnowMentoComponent } from './get-to-know-mento.component';

describe('GetToKnowMentoComponent', () => {
  let component: GetToKnowMentoComponent;
  let fixture: ComponentFixture<GetToKnowMentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetToKnowMentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetToKnowMentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
