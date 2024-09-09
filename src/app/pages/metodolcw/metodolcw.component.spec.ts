import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodolcwComponent } from './metodolcw.component';

describe('MetodolcwComponent', () => {
  let component: MetodolcwComponent;
  let fixture: ComponentFixture<MetodolcwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodolcwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetodolcwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
