import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent {}
