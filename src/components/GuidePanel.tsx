import { modelPerformance } from '../constants/models';

export function GuidePanel() {
  return (
    <aside className="panel">
      <h2>Guía de interpretación</h2>
      <div className="stack">
        <div>
          <h3>Qué observar</h3>
          <p>Revisa si el modelo conserva nombres, hechos previos, pronombres y secuencias temporales.</p>
        </div>
        <div>
          <h3>Patrones esperados</h3>
          <p>RNN suele usar lo más reciente, LSTM conserva mejor contexto medio y Transformer conecta mejor información lejana.</p>
        </div>
        <div>
          <h3>Dónde más se nota la diferencia</h3>
          <p>Según tu evaluación, soporte técnico es la categoría más útil para evidenciar las diferencias.</p>
        </div>
        <div>
          <h3>Resultados de evaluación</h3>
          <div className="stack small-gap">
            <div className="metric-card">
              <strong>RNN</strong>
              <span> EM {modelPerformance.rnn.exactMatch}% · F1 {modelPerformance.rnn.f1}%</span>
              <p>Mayor debilidad: {modelPerformance.rnn.weakestCategory}.</p>
            </div>
            <div className="metric-card">
              <strong>LSTM</strong>
              <span> EM {modelPerformance.lstm.exactMatch}% · F1 {modelPerformance.lstm.f1}%</span>
              <p>Mejora clara frente a RNN, aunque aún falla en algunos incidentes técnicos.</p>
            </div>
            <div className="metric-card">
              <strong>Transformer</strong>
              <span> EM {modelPerformance.transformer.exactMatch}% · F1 {modelPerformance.transformer.f1}%</span>
              <p>Es el más sólido en general y destaca con contexto técnico y distribuido.</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
