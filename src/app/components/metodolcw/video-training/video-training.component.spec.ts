import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTrainingComponent } from './video-training.component';

describe('VideoTrainingComponent', () => {
  let component: VideoTrainingComponent;
  let fixture: ComponentFixture<VideoTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
