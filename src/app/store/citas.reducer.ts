// src/app/store/citas.reducer.ts > aqui configuramos los reduces para manejar las acciones.
// import { createReducer, on, State, Action } from '@ngrx/store';
// import { CitasState, initialCitasState } from './citas.state';
// import * as CitasActions from './citas.actions';
// import { addCita } from './citas.actions';

// export const initState = [
//   {
//     id: "",
//     fecha: "",
//     hora: "",
//     paciente: "",
//     odontologo: "",
//     estado: "pendiente",
//   }
// ]

// export const citasReducer = createReducer(
//   initState,
//   on(CitasActions.loadCitas, state => ({ ...state, loading: true })),
//   on(CitasActions.loadCitasSuccess, (state, { citas }) => ({ ...state, citas, loading: false })),
//   on(CitasActions.loadCitasFailure, (state, { error }) => ({ ...state, error, loading: false })),
//   on(CitasActions.addCita, state => ({ ...state, loading: true })),
//   on(CitasActions.addCitaSuccess, (state, { cita }) => ({ ...state, citas: [...state, cita], loading: false })),
//   on(CitasActions.addCitaFailure, (state, { error }) => ({ ...state, error, loading: false }))
// );

import { createReducer, on, Action } from '@ngrx/store';
import { CitasState, initialCitasState } from './citas.state';
import * as CitasActions from './citas.actions';

// Inicializa el reducer con el estado inicial
export const citasReducer = createReducer(
  initialCitasState,
  on(CitasActions.loadCitas, state => ({ ...state, loading: true })),
  on(CitasActions.loadCitasSuccess, (state, { citas }) => ({
    ...state,
    citas,
    loading: false,
    error: null // Asegúrate de manejar el error correctamente
  })),
  on(CitasActions.loadCitasFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(CitasActions.addCita, state => ({ ...state, loading: true })),
  on(CitasActions.addCitaSuccess, (state, { cita }) => ({
    ...state,
    citas: [...state.citas, cita],
    loading: false,
    error: null // Asegúrate de manejar el error correctamente
  })),
  on(CitasActions.addCitaFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

export function reducer(state: CitasState | undefined, action: Action) {
  return citasReducer(state, action);
}


