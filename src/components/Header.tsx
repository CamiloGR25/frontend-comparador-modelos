import { featuredExamples } from '../constants/examples';

interface HeaderProps {
  message: string;
  onChangeMessage: (value: string) => void;
  onUseRandom: () => void;
  onCompare: () => void;
  onClear: () => void;
  loading: boolean;
  error: string;
}

export function Header({
  message,
  onChangeMessage,
  onUseRandom,
  onCompare,
  onClear,
  loading,
  error,
}: HeaderProps) {
  return (
    <section className="hero-grid">
      <article className="panel panel-large">
        <div className="panel-header-row">
          <div>
            <h1>Comparador interactivo de RNN, LSTM y Transformer</h1>
            <p className="lead">
            Ingresa un caso profesional y observa cómo los tres modelos de IA lo analizan y responden de forma distinta. Luego valida y compara sus respuestas.
            </p>
          </div>
        </div>

        <textarea
          className="prompt-box"
          value={message}
          onChange={(event) => onChangeMessage(event.target.value)}
          placeholder="Escribe un caso profesional para comparar los tres modelos..."
        />

        <div className="button-group wrap">
          {featuredExamples.map((example) => (
            <button key={example.text} type="button" className="button button-secondary" onClick={() => onChangeMessage(example.text)}>
              {example.category.replace('_', ' ')}
            </button>
          ))}
          <button type="button" className="button button-accent" onClick={onUseRandom}>
            Cargar ejemplo aleatorio
          </button>
        </div>

        <div className="button-group">
          <button type="button" className="button button-primary" onClick={onCompare} disabled={loading}>
            {loading ? 'Comparando...' : 'Comparar modelos'}
          </button>
          <button type="button" className="button button-secondary" onClick={onClear}>
            Limpiar
          </button>
        </div>

        {error ? <div className="alert">{error}</div> : null}
      </article>
    </section>
  );
}
