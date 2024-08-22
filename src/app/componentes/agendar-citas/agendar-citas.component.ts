// src/app/components/agendar-citas/agendar-citas.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CitasActions  from '../../store/citas.actions';
import { Cita } from '../../models/cita.model';
import { CitasState } from '../../store/citas.state';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})


// export class AgendarCitasComponent {
//   constructor(private store: Store) {} 

// agendarCita(cita: Cita) {
//     this.store.dispatch(addCita({ cita }));
//   } 
 

  export class AgendarCitasComponent implements OnInit {
  citaForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.citaForm = this.fb.group({
      id: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      paciente: ['', Validators.required],
      odontologo: ['', Validators.required]
    });
  }

  ngOnInit()  {}
    // addCita(
    // id: number,
    // fecha: string,
    // hora: string,
    // paciente: string,
    // odontologo: string,
    // estado: string,
    // )

    // {const cita: Cita = {
    //   id: id,
    //   fecha: fecha,
    //   hora: hora,
    //   paciente: paciente,
    //   odontologo: odontologo,
    //   estado: "pendiente", 
    // }
    // this.store.dispatch(CitasActions.addCita({cita}))
  // }
  


  onSubmit(): void {
    if (this.citaForm.valid) {
      const newCita: Cita = {
        id: this.citaForm.value.id, // Usamos un ID temporal; en una aplicación real, deberías generar IDs en el backend.
        fecha: this.citaForm.value.fecha,
        hora: this.citaForm.value.hora,
        paciente: this.citaForm.value.paciente,
        odontologo: this.citaForm.value.odontologo,
        estado: 'pendiente'
      };

      console.log(newCita)

      this.store.dispatch(CitasActions.addCita({ cita: newCita }));
      this.citaForm.reset();
    }
  }
}

//   constructor (
//     private store:Store
//   ) { }

//   ngOnInit() {
//   }

//   addCita(id:number, fecha: string, hora:string, paciente:string, odontologo:string, estado:string) {
//     const cita:Cita={id:id, fecha:fecha, hora:hora, paciente:paciente, odontologo:odontologo, estado:'pendiente'}
//     this.store.dispatch(CitasActions.addCita({cita}))
//   }
// }