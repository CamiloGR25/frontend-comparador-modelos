import type { ChatRequest, ChatResponse } from '../types';

const API_BASE_URL =  'http://127.0.0.1:8000';

export async function postChat(payload: ChatRequest): Promise<ChatResponse> {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Error ${response.status}`);
  }

  return response.json() as Promise<ChatResponse>;
}
