import type { ExampleItem } from '../types';

export const exampleBank: ExampleItem[] = [
  {
    category: 'referencias_contexto',
    difficulty: 'media',
    text: 'Laura revisó el informe de compras y luego se lo envió a Andrés para aprobación. Él pidió corregir la sección de costos. ¿Quién pidió la corrección?',
  },
  {
    category: 'documentos_procesos',
    difficulty: 'media',
    text: 'En la reunión del proyecto Alfa se revisó el cronograma, luego se ajustó el presupuesto y al final se aprobó el plan de pruebas. ¿Qué se aprobó al final?',
  },
  {
    category: 'soporte_tecnico',
    difficulty: 'alta',
    text: 'El cliente de la sede Bucaramanga reporta que en la plataforma de nómina el sistema no carga desde esta mañana. Indica que ya verificó la conexión a internet y el problema continúa. ¿Cuál es el incidente principal?',
  },
  {
    category: 'proyectos_reuniones',
    difficulty: 'media',
    text: 'En la reunión del proyecto Orión, primero se revisaron los riesgos, luego se ajustó el cronograma y finalmente se asignó a Marta la validación del entregable. ¿Qué tarea quedó asignada a Marta?',
  },
  {
    category: 'soporte_tecnico',
    difficulty: 'alta',
    text: 'El cliente de la sede Medellín reporta que en el portal de clientes la pantalla queda en blanco desde esta mañana. Indica que ya cambió la contraseña y el problema continúa. ¿Cuál es el incidente principal?',
  },
  {
    category: 'soporte_tecnico',
    difficulty: 'alta',
    text: 'El cliente de la sede Bucaramanga reporta que en la plataforma de nómina la pantalla queda en blanco desde esta mañana. Indica que ya verificó la conexión a internet y el problema continúa. ¿Cuál es el incidente principal?',
  },
  {
    category: 'soporte_tecnico',
    difficulty: 'alta',
    text: 'El cliente de la sede Medellín reporta que en la aplicación de ventas no puede ingresar desde esta mañana. Indica que ya cerró y abrió la sesión y el problema continúa. ¿Cuál es el incidente principal?',
  },
  {
    category: 'analisis_sentimiento',
    difficulty: 'media',
    text: 'Reseña: el empaque llegó dañado y el artículo no coincidía con la descripción. Aunque hicieron el reembolso, la experiencia fue mala. Pregunta: ¿la evaluación final es positiva, negativa o neutra?',
  },
  {
    category: 'analisis_sentimiento',
    difficulty: 'media',
    text: 'Reseña: la atención inicial fue rápida y amable, pero después de dos días no respondieron el correo. El producto llegó bien empacado, aunque con retraso. En general, no volvería a comprar. Pregunta: ¿la evaluación final es positiva, negativa o neutra?',
  },
  {
    category: 'correos_corporativos',
    difficulty: 'baja',
    text: 'Correo: Carolina envió a Finanzas la actualización del presupuesto y pidió confirmar la versión vigente antes del cierre contable. ¿Qué solicitó Carolina?',
  },
  {
    category: 'documentos_procesos',
    difficulty: 'media',
    text: 'El comité aprobó la actualización del protocolo de seguridad en enero. En marzo se enviaron observaciones desde jurídica. En abril se ajustó el texto final. El documento vigente es la versión 3. ¿Qué versión quedó vigente?',
  },
  {
    category: 'priorizacion_incidentes',
    difficulty: 'media',
    text: 'Incidente: el sistema de facturación está caído en tres sedes y no permite registrar ventas. La operación comercial se encuentra detenida. ¿Cuál debería ser la prioridad del incidente?',
  },
  {
    category: 'servicio_cliente',
    difficulty: 'baja',
    text: 'El cliente escribió que recibió el pedido con dos días de retraso, pero destacó que el soporte respondió rápido y resolvió el problema con un cupón. ¿La percepción final del servicio es positiva, negativa o mixta?',
  },
  {
    category: 'referencias_contexto',
    difficulty: 'media',
    text: 'Camila preparó el reporte mensual y luego se lo compartió a Julián para revisión. Él sugirió ajustar los indicadores de productividad. ¿Quién sugirió el ajuste?',
  },
  {
    category: 'documentos_procesos',
    difficulty: 'alta',
    text: 'El área de operaciones redactó la política de acceso remoto en febrero. Luego seguridad pidió incluir autenticación multifactor y jurídica ajustó la redacción final. En mayo se aprobó la versión 2.1. ¿Qué versión fue aprobada?',
  },
  {
    category: 'soporte_tecnico',
    difficulty: 'alta',
    text: 'El usuario reporta que en el módulo de cartera aparece un error 500 al intentar generar el informe diario. Ya probó en otro navegador y el error persiste. ¿Cuál es el incidente principal?',
  },
  {
    category: 'correos_corporativos',
    difficulty: 'media',
    text: 'Correo: Paula envió el acta de comité a Ricardo y le pidió validar la sección de riesgos antes de distribuirla al resto del equipo. Él respondió con observaciones sobre ese apartado. ¿Quién hizo las observaciones?',
  },
  {
    category: 'servicio_cliente',
    difficulty: 'media',
    text: 'El cliente comentó que la entrega llegó a tiempo y que el producto funcionó correctamente, pero señaló que el empaque venía mal sellado. En general dijo que volvería a comprar. ¿La percepción final del servicio es positiva, negativa o mixta?',
  },
  {
    category: 'proyectos_reuniones',
    difficulty: 'alta',
    text: 'En la reunión del proyecto Delta, primero se revisaron los hallazgos de calidad, luego se reasignó el presupuesto y al cierre se acordó que Sergio actualizaría el plan de implementación. ¿Qué tarea quedó a cargo de Sergio?',
  },
  {
    category: 'documentos_procesos',
    difficulty: 'alta',
    text: 'La versión inicial del procedimiento de compras se redactó en enero. En febrero auditoría pidió incluir controles adicionales, en marzo se corrigió la redacción y en abril se aprobó la versión 4. ¿Qué versión fue aprobada finalmente?',
  },
];

export const featuredExamples = exampleBank.slice(0, 4);
