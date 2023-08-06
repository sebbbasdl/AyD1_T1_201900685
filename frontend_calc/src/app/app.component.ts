import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  valorOperandoA: number = 0;
  valorOperandoB: number = 0;
  suma: number;
  titulo = 'Aplicación Calculadora';

  constructor(private http: HttpClient) {}

  

  ngOnInit() {

  }

  
}
