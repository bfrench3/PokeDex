import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})


export class NotesComponent {
  title: string = '';
  note: string = '';
  notes: any[] = [];


  constructor(private httpClient: HttpClient) { }

  onPress(): void {
    const noteData = {
      title: this.title,
      note: this.note,
    };
    this.httpClient.post('/note', noteData).subscribe(
      (response: any) => {
        console.log('note saved');
        alert('note saved');
      }, (error) => {
        console.error("error saving note", error);
      }
    )
  }

  showNotes(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.httpClient.post('/showNote', { user: user.username }).subscribe(
      (response: any) => {
        this.notes = response;
        console.log('Notes received:', this.notes);
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    )
  }
}

