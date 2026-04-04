# Frontend comparador de modelos IA

Frontend en React + TypeScript + Vite para comparar respuestas de RNN, LSTM y Transformer sobre el mismo prompt profesional.

## Requisitos

- Node.js 18+
- Backend FastAPI corriendo en `http://127.0.0.1:8000`

## Instalación

```bash
npm install
cp .env.example .env
npm run dev
```

## Variable de entorno

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

## Dónde se ajustan los ejemplos

### Banco completo de ejemplos aleatorios

Edita:

`src/constants/examples.ts`

Busca:

```ts
export const exampleBank = [
  ...
]
```

### Cantidad de botones rápidos visibles

En el mismo archivo, cambia esta línea:

```ts
export const featuredExamples = exampleBank.slice(0, 12);
```

- El `12` controla cuántos botones rápidos se muestran.
- El botón aleatorio usa siempre todo `exampleBank`.

## Estructura

```text
src/
├── api/
├── components/
├── constants/
├── hooks/
├── lib/
├── styles/
└── types/
```

## Flujo principal

- `Header` gestiona el prompt y carga ejemplos.
- `useCompareModels` consulta los 3 modelos.
- `ModelCard` presenta cada respuesta.
- `ComparisonPanel` compara similitud.
- `HistoryPanel` guarda pruebas hechas.
