// backend-data.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-backend-data',
  templateUrl: './backend-data.component.html'
})
export class BackendDataComponent implements OnInit {
  message: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
  }
}
