import { modelMeta } from '../constants/models';
import { estimateContextBehavior } from '../lib/text';
import type { ModelKey, ModelResult } from '../types';

interface ModelCardProps {
  modelKey: ModelKey;
  result: ModelResult | null;
  loading: boolean;
  prompt: string;
}

export function ModelCard({ modelKey, result, loading, prompt }: ModelCardProps) {
  const meta = modelMeta[modelKey];

  return (
    <article className="panel model-card">
      <div className="panel-header-row">
        <div>
          <h2>{meta.title}</h2>
          <p>{meta.summary}</p>
        </div>
        <span className="pill">{meta.badge}</span>
      </div>

      <div className="response-box">
        <div className="response-header">
          <span>Respuesta del modelo</span>
          {loading ? <span className="muted">Generando...</span> : null}
        </div>
        <p>{result?.response || (loading ? 'Consultando modelo...' : 'Aún sin respuesta.')}</p>
      </div>

      <div className="two-col-grid">
        <div className="info-box">
          <h3>Fortalezas</h3>
          <div className="tag-list">
            {meta.strengths.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="info-box">
          <h3>Límites esperados</h3>
          <div className="tag-list">
            {meta.limitations.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

     <div className="info-box">
        <h3>Lectura pedagógica del contexto</h3>
        <p style={{ whiteSpace: 'pre-line' }}>
          {estimateContextBehavior(modelKey, prompt)}
        </p>
      </div>
      {result ? (
        <div className="info-box inline-metric">
          <strong>Tiempo de respuesta:</strong>
          <span>{result.latencyMs} ms</span>
        </div>
      ) : null}
    </article>
  );
}
