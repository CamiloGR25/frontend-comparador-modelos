import { ComparisonPanel } from './components/ComparisonPanel';
import { GuidePanel } from './components/GuidePanel';
import { Header } from './components/Header';
import { HistoryPanel } from './components/HistoryPanel';
import { ModelCard } from './components/ModelCard';
import { exampleBank } from './constants/examples';
import { pickRandomExample } from './lib/examples';
import { useCompareModels } from './hooks/useCompareModels';

function App() {
  const {
    message,
    setMessage,
    loading,
    error,
    results,
    history,
    comparison,
    compareAll,
    clearAll,
  } = useCompareModels(exampleBank[0].text);

  return (
    <main className="app-shell">
      <div className="container stack large-gap">
        <div className="hero-layout">
          <Header
            message={message}
            onChangeMessage={setMessage}
            onUseRandom={() => setMessage(pickRandomExample(message).text)}
            onCompare={compareAll}
            onClear={clearAll}
            loading={loading}
            error={error}
          />
          <GuidePanel />
        </div>

        <section className="cards-grid">
          <ModelCard modelKey="rnn" result={results.rnn} loading={loading} prompt={message} />
          <ModelCard modelKey="lstm" result={results.lstm} loading={loading} prompt={message} />
          <ModelCard modelKey="transformer" result={results.transformer} loading={loading} prompt={message} />
        </section>

        <ComparisonPanel
          rnnLstm={comparison.rnnLstm}
          rnnTransformer={comparison.rnnTransformer}
          lstmTransformer={comparison.lstmTransformer}
        />

        <HistoryPanel history={history} />
      </div>
    </main>
  );
}

export default App;
