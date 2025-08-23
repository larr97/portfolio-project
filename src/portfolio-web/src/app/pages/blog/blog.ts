import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [ MatCardModule, MatButtonModule, RouterLink ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {}