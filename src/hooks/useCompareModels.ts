import { useMemo, useState } from 'react';
import { postChat } from '../api/client';
import { tokenOverlap } from '../lib/text';
import type { ModelKey, ModelResult } from '../types';

const MODEL_KEYS: ModelKey[] = ['rnn', 'lstm', 'transformer'];

export function useCompareModels(initialMessage: string) {
  const [message, setMessage] = useState(initialMessage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState<Record<ModelKey, ModelResult | null>>({
    rnn: null,
    lstm: null,
    transformer: null,
  });
  const [history, setHistory] = useState<Array<{
    prompt: string;
    timestamp: string;
    results: Record<ModelKey, ModelResult | null>;
  }>>([]);

  const [sessionId] = useState(() => `sesion-${Math.random().toString(36).slice(2, 9)}`);

  const comparison = useMemo(() => {
    return {
      rnnLstm: tokenOverlap(results.rnn?.response ?? '', results.lstm?.response ?? ''),
      rnnTransformer: tokenOverlap(results.rnn?.response ?? '', results.transformer?.response ?? ''),
      lstmTransformer: tokenOverlap(results.lstm?.response ?? '', results.transformer?.response ?? ''),
    };
  }, [results]);

  async function compareAll(): Promise<void> {
    if (!message.trim()) return;

    setLoading(true);
    setError('');

    try {
      const payloads = MODEL_KEYS.map(async (model) => {
        const startedAt = performance.now();
        const response = await postChat({ model, message, session_id: `${sessionId}-${model}` });
        return [model, { ...response, latencyMs: Math.round(performance.now() - startedAt) }] as const;
      });

      const resolved = await Promise.all(payloads);
      const nextResults = Object.fromEntries(resolved) as Record<ModelKey, ModelResult>;
      setResults(nextResults);
      setHistory((prev) => [
        {
          prompt: message,
          timestamp: new Date().toLocaleTimeString(),
          results: nextResults,
        },
        ...prev,
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No fue posible consultar la API.');
    } finally {
      setLoading(false);
    }
  }

  function clearAll(): void {
    setResults({ rnn: null, lstm: null, transformer: null });
    setHistory([]);
    setError('');
  }

  return {
    message,
    setMessage,
    loading,
    error,
    results,
    history,
    comparison,
    compareAll,
    clearAll,
  };
}
