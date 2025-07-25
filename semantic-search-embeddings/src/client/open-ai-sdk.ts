import OpenAI from 'openai';
import dotenv from 'dotenv';
import { documents } from '../docs/documents';

dotenv.config();

interface Document {
  id: number;
  content: string;
}

interface EmbeddedDocument extends Document {
  embedding: number[];
}

interface SearchResult {
  id: number;
  content: string;
  score: number;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const embedText = async (text: string): Promise<number[]> => {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
};

export const embeddedDocs = async (): Promise<EmbeddedDocument[]> => await Promise.all(
  documents.map(async (doc) => {
    const embedding = await embedText(doc.content);
    return { ...doc, embedding };
  })
);

function cosineSimilarity(a: number[], b: number[]): number {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const normB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (normA * normB);
}

export const getEmbeddedDocs = async (query: string): Promise<SearchResult[]> => {
  const docs = await embeddedDocs();
  const queryEmbedding = await embedText(query);
  const results = docs.map(doc => ({
    id: doc.id,
    content: doc.content,
    score: cosineSimilarity(queryEmbedding, doc.embedding),
  }));
  
  // Sort by similarity score in descending order (highest first)
  return results.sort((a, b) => b.score - a.score);
};