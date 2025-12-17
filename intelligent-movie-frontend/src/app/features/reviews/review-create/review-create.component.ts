import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent {}
