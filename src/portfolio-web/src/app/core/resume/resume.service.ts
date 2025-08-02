import { Injectable } from '@angular/core';
import { Resume } from './resume.model';
import { LanguageService } from '../language/language.service';

/**
 * Control Object: "Resumes Control" (model domain)
 *
 * Service for handling multilingual resume file access and downloads.
 * 
 * This service provides logic to manage multiple versions of a resume
 * in different languages. It integrates with the LanguageService to 
 * serve the resume matching the user's current language.
 *
 * @export
 * @class ResumeService
 */
@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  /**
   * Array of available resumes, each associated with a language code.
   * 
   * @private
   * @type {Resume[]}
   */
  private resumes = [
    new Resume(1, 'Luis Rodriguez\'s resume', 'en', '/resume/resume_en.pdf'),
    new Resume(2, 'El Curriculum de Luis Rodriguez', 'es', '/resume/resume_es.pdf'),
  ];

  /**
   * The resume currently selected based on the user's language preference.
   * 
   * @private
   * @type {Resume}
   */
  private currentResume: Resume;

  /**
   * Constructs the ResumeService.
   * 
   * Initializes the current resume based on the language code provided by
   * the LanguageService. Falls back to the first resume if no match is found.
   * 
   * @param {LanguageService} languageService Service that provides the current language code.
   */
  constructor(private languageService: LanguageService) { 
    const lang = this.languageService.getCurrentLanguage().getCode(); // get current language
    this.currentResume = this.resumes.find(resume => resume.getLanguageCode() === lang) || this.resumes[0];
  }

  /**
   * Downloads the resume PDF corresponding to the user's current language.
   * 
   * This method re-checks the user's current language, selects the matching
   * resume, and triggers a download using a temporary anchor element.
   * 
   * @returns {void}
   */
  downloadResume(): void {
    const lang = this.languageService.getCurrentLanguage().getCode(); // get current language
    this.currentResume = this.resumes.find(resume => resume.getLanguageCode() === lang) || this.resumes[0];
    const link = document.createElement('a');
    link.href = this.currentResume.getFilePath(); // Path to your PDF file
    link.download = this.currentResume.getName(); // Name of the downloaded file
    link.click();
  }

}