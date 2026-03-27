import { modelMeta } from '../constants/models';
import type { ModelKey, ModelResult } from '../types';

interface HistoryEntry {
  prompt: string;
  timestamp: string;
  results: Record<ModelKey, ModelResult | null>;
}

interface HistoryPanelProps {
  history: HistoryEntry[];
}

export function HistoryPanel({ history }: HistoryPanelProps) {
  return (
    <section className="panel">
      <h2>Historial de pruebas</h2>
      {history.length === 0 ? (
        <p className="muted">Aún no hay pruebas registradas.</p>
      ) : (
        <div className="stack">
          {history.map((item, index) => (
            <article key={`${item.timestamp}-${index}`} className="history-card">
              <div className="panel-header-row">
                <strong>Prompt</strong>
                <span className="pill">{item.timestamp}</span>
              </div>
              <p>{item.prompt}</p>
              <div className="three-col-grid paragraph-top">
                {(['rnn', 'lstm', 'transformer'] as ModelKey[]).map((key) => (
                  <div key={key} className="info-box compact">
                    <strong>{modelMeta[key].title}</strong>
                    <p>{item.results[key]?.response ?? 'Sin respuesta'}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
