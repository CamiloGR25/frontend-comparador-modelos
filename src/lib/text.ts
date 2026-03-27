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

export function estimateContextBehavior(model: 'rnn' | 'lstm' | 'transformer', prompt: string): string {
  const normalized = normalizeText(prompt);
  const words = normalized.split(/\s+/).filter(Boolean);
  const longContext = words.length > 28;
  const hasReference = /\b(él|ella|ellos|ellas|se lo|se la|quién|quien)\b/.test(normalized);
  const hasSequence = /\b(luego|después|despues|al final|primero|segundo|tercero)\b/.test(normalized);

  if (model === 'rnn') {
    return longContext || hasReference
      ? 'Probable pérdida de contexto lejano o ambigüedad en referencias.'
      : 'Se espera respuesta basada sobre todo en la información más reciente.';
  }

  if (model === 'lstm') {
    return longContext && hasReference
      ? 'Debería retener parte del contexto, aunque puede confundir dependencias largas.'
      : 'Probablemente conserve mejor el contexto relevante que la RNN.';
  }

  return hasSequence || hasReference || longContext
    ? 'Tiene mejores condiciones para conectar información distribuida en el mensaje.'
    : 'Puede aprovechar atención global incluso en prompts cortos.';
}
