type BootLoaderProps = {
  seconds: number;
  dots: string;
  loadingMessage: string;
};

export function BootLoader({ seconds, dots, loadingMessage }: BootLoaderProps) {
  return (
    <main className="app-shell">
      <div className="container boot-loader">
        <div className="boot-loader__card">
          <div className="boot-loader__spinner" />

          <h2 className="boot-loader__title">Iniciando servidor{dots}</h2>

          <p className="boot-loader__message">{loadingMessage}</p>

          <p className="boot-loader__time">Tiempo transcurrido: {seconds}s</p>

          <p className="boot-loader__hint">
            El primer inicio puede tardar unos segundos...
          </p>

          <div className="boot-loader__bar">
            <div className="boot-loader__bar-fill" />
          </div>
        </div>
      </div>
    </main>
  );
}