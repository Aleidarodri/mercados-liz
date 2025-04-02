import { Field } from "@/utils/constants/interfaces";

export function PostulacionesField(): Field[] {
  return [
    {
      type: "H1",
      require: false,
      label: "Datos personales",
    },
    {
      type: "Flex",
      name: "flex",
      label: "Información Personal",
      require: false,
      elements: [
        {
          id: 0,
          type: "INPUT",
          name: "nombre",
          label: "Nombre",
          placeholder: "Nombre",
          require: true,
        },
        {
          id: 1,
          type: "INPUT",
          name: "apellido_paterno",
          label: "Apellido Paterno",
          placeholder: "Apellido Paterno",
          require: true,
        },
        {
          id: 2,
          type: "INPUT",
          name: "apellido_materno",
          label: "Apellido Materno",
          placeholder: "Apellido Materno",
          require: false,
        },
      ],
    },
    {
      id: 3,
      type: "INPUT",
      name: "edad",
      label: "Edad",
      placeholder: "Edad",
      require: true,
    },
    {
      id: 4,
      type: "DATE",
      name: "fecha_nacimiento",
      label: "Fecha de Nacimiento",
      placeholder: "Fecha de Nacimiento",
      require: true,
    },
    {
      id: 5,
      type: "MAIL",
      name: "correo_electronico",
      label: "Correo Electrónico",
      placeholder: "Correo Electrónico",
      require: true,
    },
    {
      id: 6,
      type: "PHONE",
      name: "numero_telefono",
      label: "Número de Teléfono",
      placeholder: "Número de Teléfono",
      require: true,
    },
    {
      id: 7,
      type: "TEXT_AREA",
      name: "direccion_actual",
      label: "Dirección Actual",
      placeholder: "Dirección Actual",
      require: true,
    },
    {
      id: 7,
      type: "FILE",
      name: "file",
      label: "Curriculo",
      placeholder: "CV personal",
      require: true,
    },
    {
      type: "H1",
      require: false,
      label: "Datos de ubicacion",
    },
    {
      id: 8,
      type: "DATE",
      name: "fecha_radica_ciudad",
      label: "Fecha de Radicación en la Ciudad",
      placeholder: "Fecha de Radicación en la Ciudad",
      require: true,
    },
    {
      id: 9,
      type: "SELECT",
      name: "medio_transporte",
      label: "Medio de Transporte",
      placeholder: "Medio de Transporte",
      require: true,
      options: ["Automóvil", "Transporte Público", "Bicicleta", "Caminando"],
      multi: false,
    },
    {
      id: 10,
      type: "INPUT",
      name: "tiempo_traslado",
      label: "Tiempo de Traslado",
      placeholder: "Tiempo de Traslado",
      require: true,
    },
    {
      type: "H1",
      require: false,
      label: "Estado civil",
    },
    {
      id: 11,
      type: "SELECT",
      name: "estado_civil",
      label: "Estado Civil",
      placeholder: "Estado Civil",
      require: true,
      options: ["Soltero", "Casado", "Divorciado", "Viudo"],
      multi: false,
    },
    {
      id: 12,
      type: "INPUT",
      name: "tiempo_casado",
      label: "Tiempo Casado",
      placeholder: "Tiempo Casado",
      require: false,
    },
    {
      id: 13,
      type: "CHECKBOX",
      name: "bienes_mancomunados",
      label: "Bienes Mancomunados",
      placeholder: "Bienes Mancomunados",
      require: false,
    },
    {
      id: 14,
      type: "SELECT",
      name: "tienes_hijos",
      label: "¿Tienes Hijos?",
      placeholder: "¿Tienes Hijos?",
      require: true,
      options: ["Sí", "No"],
      multi: false,
    },
    {
      id: 15,
      type: "SELECT",
      name: "planeas_mas_hijos",
      label: "¿Planeas más hijos?",
      placeholder: "¿Planeas más hijos?",
      require: true,
      options: ["Sí", "No"],
      multi: false,
    },
    {
      type: "H1",
      require: false,
      label: "Datos esculares",
    },
    {
      id: 16,
      type: "SELECT",
      name: "disponibilidad_horario",
      label: "Disponibilidad de Horario",
      placeholder: "Disponibilidad de Horario",
      require: true,
      options: ["Sí", "No"],
      multi: false,
    },
    {
      id: 17,
      type: "SELECT",
      name: "ultimo_grado_estudios",
      label: "Último Grado de Estudios",
      placeholder: "Último Grado de Estudios",
      require: true,
      options: [
        "Primaria",
        "Secundaria",
        "Bachillerato",
        "Licenciatura",
        "Maestría",
        "Doctorado",
      ],
      multi: false,
    },
    {
      id: 18,
      type: "SELECT",
      name: "tienes_certificado",
      label: "¿Tienes Certificado?",
      placeholder: "¿Tienes Certificado?",
      require: true,
      options: ["Sí", "No"],
      multi: false,
    },
    {
      id: 19,
      type: "SELECT",
      name: "estudias_actualmente",
      label: "¿Estudias Actualmente?",
      placeholder: "¿Estudias Actualmente?",
      require: true,
      options: ["Sí", "No"],
      multi: false,
    },
    {
      id: 20,
      type: "INPUT",
      name: "dias_horario_estudio",
      label: "Días y Horario de Estudio",
      placeholder: "Días y Horario de Estudio",
      require: false,
    },
    {
      type: "H1",
      require: false,
      label: "Referencias",
    },
    {
      id: 21,
      type: "INPUT",
      name: "ultimo_lugar_trabajo",
      label: "Último Lugar de Trabajo",
      placeholder: "Último Lugar de Trabajo",
      require: true,
    },
    {
      id: 22,
      type: "INPUT",
      name: "puesto_ultimo_trabajo",
      label: "Puesto en el Último Trabajo",
      placeholder: "Puesto en el Último Trabajo",
      require: true,
    },
    {
      id: 23,
      type: "INPUT",
      name: "tiempo_trabajo",
      label: "Tiempo en el Último Trabajo",
      placeholder: "Tiempo en el Último Trabajo",
      require: true,
    },
    {
      id: 24,
      type: "INPUT",
      name: "salario_semanal",
      label: "Salario Semanal",
      placeholder: "Salario Semanal",
      require: true,
    },
    {
      id: 25,
      type: "INPUT",
      name: "horario_trabajo",
      label: "Horario de Trabajo",
      placeholder: "Horario de Trabajo",
      require: true,
    },
    {
      id: 26,
      type: "INPUT",
      name: "dia_descanso",
      label: "Día de Descanso",
      placeholder: "Día de Descanso",
      require: true,
    },
    {
      id: 27,
      type: "TEXT_AREA",
      name: "motivo_salida",
      label: "Motivo de Salida",
      placeholder: "Motivo de Salida",
      require: true,
    },
    {
      type: "H1",
      require: false,
      label: "Datos penúltimo trabajo",
    },
    {
      id: 28,
      type: "INPUT",
      name: "penultimo_lugar_trabajo",
      label: "Penúltimo Lugar de Trabajo",
      placeholder: "Penúltimo Lugar de Trabajo",
      require: false,
    },
    {
      id: 29,
      type: "INPUT",
      name: "puesto_penultimo_trabajo",
      label: "Puesto en el Penúltimo Trabajo",
      placeholder: "Puesto en el Penúltimo Trabajo",
      require: false,
    },
    {
      id: 30,
      type: "INPUT",
      name: "tiempo_penultimo_trabajo",
      label: "Tiempo en el Penúltimo Trabajo",
      placeholder: "Tiempo en el Penúltimo Trabajo",
      require: false,
    },
    {
      id: 31,
      type: "INPUT",
      name: "salario_semanal_penultimo",
      label: "Salario Semanal en el Penúltimo Trabajo",
      placeholder: "Salario Semanal en el Penúltimo Trabajo",
      require: false,
    },
    {
      id: 32,
      type: "INPUT",
      name: "horario_penultimo_trabajo",
      label: "Horario en el Penúltimo Trabajo",
      placeholder: "Horario en el Penúltimo Trabajo",
      require: false,
    },
    {
      id: 33,
      type: "INPUT",
      name: "dia_descanso_penultimo",
      label: "Día de Descanso en el Penúltimo Trabajo",
      placeholder: "Día de Descanso en el Penúltimo Trabajo",
      require: false,
    },
    {
      id: 34,
      type: "TEXT_AREA",
      name: "motivo_salida_penultimo",
      label: "Motivo de Salida del Penúltimo Trabajo",
      placeholder: "Motivo de Salida del Penúltimo Trabajo",
      require: false,
    },
    {
      type: "H1",
      require: false,
      label: "Vacante",
    },
    {
      id: 35,
      type: "SELECT",
      name: "como_se_entero_vacante",
      label: "¿Cómo se enteró de la vacante?",
      placeholder: "¿Cómo se enteró de la vacante?",
      require: true,
      options: ["Internet", "Recomendación", "Periódico", "Otro"],
      multi: false,
    },
    {
      id: 36,
      type: "SELECT",
      name: "conoce_trabajador",
      label: "¿Conoce a algún trabajador de la empresa?",
      placeholder: "¿Conoce a algún trabajador de la empresa?",
      require: true,
      options: ["Sí", "No"],
      multi: false,
    },
    {
      id: 37,
      type: "INPUT",
      name: "a_quien_conoce",
      label: "¿A quién conoce?",
      placeholder: "¿A quién conoce?",
      require: false,
    },
    {
      id: 38,
      type: "INPUT",
      name: "tipo_relacion",
      label: "Tipo de Relación",
      placeholder: "Tipo de Relación",
      require: false,
    },
    {
      id: 39,
      type: "INPUT",
      name: "sucursal",
      label: "Sucursal",
      placeholder: "Sucursal",
      require: true,
    },
    {
      id: 40,
      type: "INPUT",
      name: "vacante",
      label: "Vacante",
      placeholder: "Vacante",
      require: true,
    },
  ];
}
