import { Component } from '@angular/core';
import { DownloadResumeButton } from "../../shared/components/download-resume-button/download-resume-button";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  imports: [
    DownloadResumeButton,
    TranslatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}