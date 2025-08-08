import { Component } from '@angular/core';
import { ResumeService } from '../../../core/resume/resume.service';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from "@ngx-translate/core";

/**
 * Component that provides a UI button for downloading the resume PDF.
 * 
 * When clicked, it downloads the version of the resume that matches the 
 * user's current language preference.
 *
 * @export
 * @component
 */
@Component({
  selector: 'app-download-resume-button',
  imports: [MatButton, TranslatePipe],
  templateUrl: './download-resume-button.html',
  styleUrl: './download-resume-button.scss'
})
export class DownloadResumeButton {

  /**
   * Creates an instance of DownloadResumeButton.
   * 
   * @param {ResumeService} resumeService Used internally to handle the resume download.
   */
  constructor(private resumeService: ResumeService) {}

  /**
   * Initiates the download of the resume PDF.
   * 
   * @returns {void}
   */
  public requestResume(): void {
    this.resumeService.downloadResume();
  }
}