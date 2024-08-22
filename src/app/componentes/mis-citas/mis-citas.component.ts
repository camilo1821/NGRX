// src/app/components/mis-citas/mis-citas.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cita } from '../../models/cita.model';
import { selectAllCitas } from '../../store/citas.selectors';
import { CitasState } from '../../store/citas.state';

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
// export class MisCitasComponent implements OnInit {
//   // citas$: Observable<Cita[]>;
//   citas: Cita[] = []

//   constructor(private store: Store <CitasState>) {this.citas = this.store.pipe(select(selectAllCitas));}
    

//   ngOnInit() {
//     // Aquí podrías despachar una acción para cargar citas, si fuera necesario
//     this.store.pipe(select('citas')).subscribe((citas:Cita[])=>{
//       console.log(citas)
//       this.citas=citas;
//     });
//   }
// }

export class MisCitasComponent implements OnInit {
  citas$: Observable<Cita[]>;

  constructor(private store: Store<CitasState>) {
    // Asigna el observable desde el store usando el selector
    this.citas$ = this.store.pipe(select(selectAllCitas));
  }

  ngOnInit() {
    // Suscríbete al observable para manejar los datos si es necesario
    this.citas$.subscribe({
      next: (citas) => {
        console.log('Citas desde el observable:', citas); // Maneja los datos como necesites
      },
      error: (err) => {
        console.error('Error al cargar citas:', err);
      }
    });
  }

  // ngOnInit() {
  //   // Suscríbete al observable para manejar los datos si es necesario
  //   this.citas$.subscribe(citas => {
  //     console.log(citas); // Maneja los datos como necesites
  //   });
  // }
}