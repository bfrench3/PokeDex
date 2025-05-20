import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileString: string = 'assets/blank-photo.webp'
  starter: any
  user: any

  @ViewChild('fileInput') fileInput!: ElementRef;

  ngOnInit(): void {
    const starter = localStorage.getItem('starter') || 'No Starter Selected';
    this.starter = starter
    const user = localStorage.getItem('user') || 'guest';
    this.user = user;
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      this.profileString = savedImage; // Update profile image if exists in localStorage
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.profileString = e.target?.result as string; // Update profile image

        // Optionally, save image to localStorage for persistence
        localStorage.setItem('profileImage', this.profileString);
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  }

}
