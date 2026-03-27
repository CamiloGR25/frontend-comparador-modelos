export type ModelKey = 'rnn' | 'lstm' | 'transformer';

export interface ChatRequest {
  model: ModelKey;
  message: string;
  session_id: string;
}

export interface ChatResponse {
  model: ModelKey;
  session_id: string;
  prompt: string;
  response: string;
}

export interface ModelResult extends ChatResponse {
  latencyMs: number;
}

export interface ExampleItem {
  category: string;
  difficulty: 'baja' | 'media' | 'alta';
  text: string;
}

export interface ModelPerformance {
  exactMatch: number;
  f1: number;
  weakestCategory: string;
}
