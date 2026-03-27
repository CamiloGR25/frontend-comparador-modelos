type BootErrorProps = {
  message: string;
};

export function BootError({ message }: BootErrorProps) {
  return (
    <main className="app-shell">
      <div className="container boot-loader">
        <div className="boot-loader__card">
          <h2 className="boot-loader__title">Error al conectar con la API</h2>
          <p className="boot-loader__message">{message}</p>
          <button className="boot-loader__retry" onClick={() => window.location.reload()}>
            Reintentar
          </button>
        </div>
      </div>
    </main>
  );
}