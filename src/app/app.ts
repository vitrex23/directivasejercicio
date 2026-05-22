import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

type EstadoCarga = 'Pendiente' | 'Cargando' | 'Exito';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  estado: EstadoCarga = 'Pendiente';
  elementos: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  manejarAccion() {
    if (this.estado === 'Pendiente') {
      this.iniciarCarga();
    } else if (this.estado === 'Exito') {
      this.borrarDatos();
    }
  }

  iniciarCarga() {
    this.estado = 'Cargando';
    this.cdr.detectChanges();
    
    setTimeout(() => {
      this.elementos = [
        'elemento 1: introduccion a angular',
        'elemento 2: directivas estructurales',
        'elemento 3: data binding',
        'elemento 4: peticiones asincronas'
      ];
      this.estado = 'Exito';
      this.cdr.detectChanges();
    }, 2000);
  }

  borrarDatos() {
    this.elementos = [];
    this.estado = 'Pendiente';
    this.cdr.detectChanges();
  }
}