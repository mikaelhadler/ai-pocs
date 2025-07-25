# Semantic Search with OpenAI Embeddings

Semantic search system using OpenAI embeddings to find relevant documents based on natural language queries.

## 🚀 Features

- **Semantic Search**: Find relevant documents using OpenAI embeddings
- **Interactive CLI**: Command line interface with interactive mode
- **Colored Results**: Visual display with colors based on relevance
- **Multiple Queries**: Support for multiple searches in a session

## 📋 Prerequisites

- Node.js 18+
- OpenAI API key

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp env.example .env
```

4. Add your OpenAI API key to the `.env` file:
```
OPENAI_API_KEY=your_api_key_here
```

## 🎯 How to Use

### Simple Search

```bash
npm run search -- "How to contact support?"
```

### Search with Custom Limit

```bash
npm run search -- "How to reset password?" --limit 5
```

### Interactive Mode

```bash
npm run interactive
```

In interactive mode, you can:
- Type queries normally
- Use `help` to see available commands
- Use `exit` to quit

### Available Commands

```bash
# Show general help
npm run cli -- --help

# Show search command help
npm run cli -- search --help

# Show interactive mode help
npm run cli -- interactive --help
```

## 📊 Example Output

```
🔍 Starting semantic search...
Query: "How to contact support?"
Result limit: 3

✅ Search completed in 1439ms

📋 Most relevant results:

1. How to contact customer support
   ID: 3 | Score: (70.7% similar)

2. How to change your email address
   ID: 4 | Score: (35.8% similar)

3. How to reset your password in our platform
   ID: 1 | Score: (35.1% similar)
```

## 🎨 Result Colors

- 🟢 **Green**: High relevance (>70% similarity)
- 🟡 **Yellow**: Medium relevance (50-70% similarity)
- 🔴 **Red**: Low relevance (<50% similarity)

## 📁 Project Structure

```
semantic-search-embeddings/
├── src/
│   ├── client/
│   │   └── open-ai-sdk.ts    # OpenAI client and embedding functions
│   └── docs/
│       └── documents.ts      # Documents for search
├── cli.ts                    # Command line interface
├── index.ts                  # Original script
├── package.json
└── tsconfig.json
```

## 🔧 Available Scripts

- `npm start`: Run the original script
- `npm run cli`: Run the main CLI
- `npm run search`: Run direct search
- `npm run interactive`: Start interactive mode

## 🛡️ Error Handling

The system includes robust error handling:
- Input validation
- OpenAI API error handling
- Colored and informative error messages
- Graceful degradation in case of failures

## 📈 Performance

- Typical response time: 1-2 seconds
- Embedding cache for better performance
- Asynchronous processing for multiple queries

## 🤝 Contributing

1. Fork the project
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is under the MIT license.