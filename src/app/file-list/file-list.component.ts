import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  fileList: any[] = [];
  displayedColumns: string[] = ['documentName', 'uploadUser', 'uploadDate'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchFileList();
  }

  fetchFileList(): void {
    this.http.get<any[]>('/api/documents')
      .subscribe(
        (response) => {
          this.fileList = response;
        },
        (error) => {
          console.error('Error fetching file list:', error);
          // Handle error, e.g., show error message
        }
      );
  }
}
