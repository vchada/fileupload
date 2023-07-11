import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile!: File;
  uploading: boolean = false;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile, this.selectedFile.name);

      this.uploading = true;

      this.http.post('/api/upload', uploadData)
        .subscribe(
          () => {
            this.snackBar.open('File uploaded successfully', 'Close', { duration: 3000 });
            this.uploading = false;
          },
          (error: any) => {
            this.snackBar.open('Error uploading file', 'Close', { duration: 3000 });
            this.uploading = false;
          }
        );
    }
  }
}
