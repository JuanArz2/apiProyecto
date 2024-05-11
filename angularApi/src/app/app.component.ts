import { Component, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterOutlet } from '@angular/router';

import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataService = inject(DataService);

  allData: any[] = [];

  obtenerAllData(){
    this.dataService.obtenerData().subscribe((rta: any)=>{
      console.log("rta: ", rta)
      if (rta) {
        this.allData = rta;
      } else {
        console.log("Ocurrió un error")
      }
    })
  }

  ngOnInit(){
    this.obtenerAllData();
  }
}
