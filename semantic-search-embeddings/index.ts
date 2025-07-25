import { getEmbeddedDocs } from './src/client/open-ai-sdk';

async function main() {
  console.log("Generating embeddings for documents...");
  const query = "How do I talk to support?";
  const embeddedDocs = await getEmbeddedDocs(query);

  embeddedDocs.sort((a, b) => b.score - a.score);

  console.log("\nMost relevant results for query: \"" + query + "\"");
  embeddedDocs.slice(0, 3).forEach(result => {
    console.log(`- ${result.content} (score: ${result.score.toFixed(4)})`);
  });
}

main().catch(console.error);
