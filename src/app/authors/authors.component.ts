import { Component } from '@angular/core';
import {BooksService} from '../books/service/books.service';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})

export class AuthorsComponent {
  authorId: number = 0;
  author: any;
  message: string = '';

  constructor(private booksService: BooksService) {}

  getAuthor() {
    this.booksService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.author = data;
        this.message = '';
      },
      error: () => {
        this.author = null;
        this.message = 'Author not found';
      }
    });
  }
}
