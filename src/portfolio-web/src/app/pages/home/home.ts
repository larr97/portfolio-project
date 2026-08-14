import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DownloadResumeButton } from "../../shared/components/download-resume-button/download-resume-button";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  imports: [
    DownloadResumeButton,
    TranslatePipe
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.scss'
})
export class Home {}