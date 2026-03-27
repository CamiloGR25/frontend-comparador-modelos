import type { ModelKey, ModelPerformance } from '../types';

export const modelMeta: Record<ModelKey, {
  title: string;
  summary: string;
  strengths: string[];
  limitations: string[];
  badge: string;
}> = {
  rnn: {
    title: 'RNN',
    summary: 'Procesa secuencialmente y recuerda poco contexto.',
    strengths: ['Simple', 'Didáctica', 'Buena en secuencias cortas'],
    limitations: ['Olvida rápido', 'Pierde referencias', 'Menor coherencia en contexto largo'],
    badge: 'Memoria corta',
  },
  lstm: {
    title: 'LSTM',
    summary: 'Mantiene más información gracias a compuertas de memoria.',
    strengths: ['Retiene mejor el contexto', 'Más estable que RNN', 'Mejor en dependencias medias'],
    limitations: ['Sigue siendo secuencial', 'Más lenta', 'Aún limitada en contexto muy largo'],
    badge: 'Memoria media',
  },
  transformer: {
    title: 'Transformer',
    summary: 'Relaciona tokens entre sí mediante atención.',
    strengths: ['Maneja contexto largo', 'Mejor en referencias', 'Visión global del texto'],
    limitations: ['Más costoso', 'Más complejo', 'Puede sobreajustarse si el dataset es pequeño'],
    badge: 'Atención global',
  },
};

export const modelPerformance: Record<ModelKey, ModelPerformance> = {
  rnn: { exactMatch: 83.33, f1: 84.81, weakestCategory: 'Soporte técnico' },
  lstm: { exactMatch: 93.33, f1: 93.33, weakestCategory: 'Soporte técnico' },
  transformer: { exactMatch: 96.67, f1: 97.41, weakestCategory: 'Soporte técnico' },
};
