import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadResumeButton } from './download-resume-button';

describe('DownloadResumeButton', () => {
  let component: DownloadResumeButton;
  let fixture: ComponentFixture<DownloadResumeButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadResumeButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadResumeButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
