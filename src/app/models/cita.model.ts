// src/app/models/cita.model.ts > Aqui definimos los modelos para las citas
export interface Cita {
    id: number;
    fecha: string;
    hora: string;
    paciente: string;
    odontologo: string;
    estado: 'confirmada' | 'pendiente' | 'cancelada';
  }

