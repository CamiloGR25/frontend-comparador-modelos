import { exampleBank } from '../constants/examples';
import type { ExampleItem } from '../types';

export function pickRandomExample(currentText: string): ExampleItem {
  const candidates = exampleBank.filter((item) => item.text !== currentText);
  const pool = candidates.length > 0 ? candidates : exampleBank;
  return pool[Math.floor(Math.random() * pool.length)];
}
