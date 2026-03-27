import { useEffect, useMemo, useState } from 'react';
import { wakeUpApi } from '../api/client';

export function useApiBoot() {
  const [booting, setBooting] = useState(true);
  const [bootError, setBootError] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const initApp = async () => {
      try {
        await wakeUpApi();
      } catch (err) {
        setBootError(err instanceof Error ? err.message : 'No se pudo conectar con la API');
      } finally {
        setBooting(false);
      }
    };

    initApp();
  }, []);

  useEffect(() => {
    if (!booting) return;

    const secondsTimer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    const dotsTimer = setInterval(() => {
      setDots((prev) => {
        if (prev === '.') return '..';
        if (prev === '..') return '...';
        return '.';
      });
    }, 500);

    return () => {
      clearInterval(secondsTimer);
      clearInterval(dotsTimer);
    };
  }, [booting]);

  const loadingMessage = useMemo(() => {
    if (seconds < 5) return 'Preparando la aplicación';
    if (seconds < 10) return 'Conectando con el servidor';
    if (seconds < 20) return 'Despertando servidor gratuito';
    return 'Esto está tardando más de lo normal, pero seguimos intentando';
  }, [seconds]);

  return {
    booting,
    bootError,
    seconds,
    dots,
    loadingMessage,
  };
}