interface ComparisonPanelProps {
  rnnLstm: number;
  rnnTransformer: number;
  lstmTransformer: number;
}

export function ComparisonPanel({ rnnLstm, rnnTransformer, lstmTransformer }: ComparisonPanelProps) {
  return (
    <section className="panel">
      <h2>Similitud entre respuestas</h2>
      <div className="three-col-grid">
        <div className="stat-box">
          <span>RNN vs LSTM</span>
          <strong>{rnnLstm}%</strong>
        </div>
        <div className="stat-box">
          <span>RNN vs Transformer</span>
          <strong>{rnnTransformer}%</strong>
        </div>
        <div className="stat-box">
          <span>LSTM vs Transformer</span>
          <strong>{lstmTransformer}%</strong>
        </div>
      </div>
      <p className="muted paragraph-top">
        Este indicador usa coincidencia simple de tokens. Es útil para visualización rápida, aunque no sustituye una evaluación formal.
      </p>
    </section>
  );
}
