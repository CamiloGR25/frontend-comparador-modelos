export function normalizeText(text: string): string {
  return text.trim().toLowerCase();
}

export function tokenOverlap(a: string, b: string): number {
  const ta = new Set(normalizeText(a).split(/\s+/).filter(Boolean));
  const tb = new Set(normalizeText(b).split(/\s+/).filter(Boolean));

  if (!ta.size || !tb.size) return 0;

  let match = 0;
  ta.forEach((token) => {
    if (tb.has(token)) match += 1;
  });

  return Math.round((match / Math.max(ta.size, tb.size)) * 100);
}

export function estimateContextBehavior(
  model: 'rnn' | 'lstm' | 'transformer',
  _prompt: string
): string {
  if (model === 'rnn') {
    return [
      'Un modelo secuencial que procesa el texto paso a paso y solo conserva una parte limitada del contexto reciente.',
      '',
      '• El sistema solo recuerda las últimas 3 palabras.',
      '• Procesa la secuencia en orden.',
      '• Puede perder información importante si apareció mucho antes en el mensaje.',
      '• Falla en interpretar referencias cuando el contexto necesario queda fuera de su memoria inmediata.',
    ].join('\n');
  }

  if (model === 'lstm') {
    return [
      'Una arquitectura recurrente mejorada que puede conservar información relevante durante más tiempo gracias a un mecanismo de memoria más estable.',
      '',
      '• El sistema tiene una memoria más larga que la RNN básica.',
      '• Puede conservar mejor información relevante del mensaje.',
      '• Mejora la interpretación, especialmente cuando la referencia depende de partes previas del texto.',
      '• Aun así, su capacidad sigue siendo limitada, sobre todo en relaciones largas o complejas.',
    ].join('\n');
  }

  return [
    'Una arquitectura que modela relaciones entre todas las palabras del mensaje mediante mecanismos de atención.',
    '',
    '• Todas las palabras se conectan entre sí dentro del análisis del mensaje.',
    '• El sistema no depende solo de memoria acumulativa paso a paso.',
    '• Se incorpora una visualización tipo red para mostrar relaciones de atención.',
    '• Puede identificar mejor qué partes del contexto son más relevantes para responder.',
  ].join('\n');
}