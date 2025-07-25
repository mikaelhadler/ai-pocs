# Semantic QA System with OpenAI Embeddings

Semantic search system using OpenAI embeddings to find relevant documents and provide step-by-step instructions based on natural language queries.

## 🚀 Features

- **Semantic Search**: Find relevant documents using OpenAI embeddings
- **Step-by-Step Instructions**: Get detailed tutorials for common tasks
- **Smart Recommendations**: Automatic instruction display based on relevance
- **Expanded Knowledge Base**: 15+ categories covering account, billing, support, and more
- **Colored Results**: Visual display with colors based on relevance
- **Fast Performance**: Quick search results with proper sorting

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
npm run search -- "How to reset my password?"
```

### Search with Custom Limit

```bash
npm run search -- "How to request a refund?" --limit 5
```

### Force Instructions Display

```bash
npm run search -- "How to contact support?" --instructions
```

### Available Commands

```bash
# Show general help
npm run cli -- --help

# Show search command help
npm run cli -- search --help
```

## 📊 Example Output

```
🔍 Starting semantic search...
Query: "How to reset my password?"
Result limit: 3

✅ Search completed in 1637ms

📋 Most relevant results:

1. How to reset your password in our platform
   Category: Account Management | Score: (74.2% similar)

2. How to change your email address
   Category: Account Management | Score: (51.9% similar)

3. How to update your payment method
   Category: Billing | Score: (44.1% similar)

📖 Instructions:
────────────────────────────────────────────────────────────
🔐 Password Reset Instructions:
1. Go to the login page
2. Click on "Forgot Password?" link
3. Enter your email address
4. Check your email for a reset link
5. Click the link and create a new password
6. Make sure your new password is at least 8 characters long with numbers and symbols
────────────────────────────────────────────────────────────
```

## 🎨 Result Colors

- 🟢 **Green**: High relevance (>70% similarity) - Instructions shown automatically
- 🟡 **Yellow**: Medium relevance (50-70% similarity) - Instructions shown automatically
- 🔴 **Red**: Low relevance (<50% similarity) - Instructions not shown unless forced

## 📚 Knowledge Base Categories

- **Account Management**: Password reset, email changes, subscription management
- **Billing**: Payment methods, refunds, invoices
- **Support**: Contact information, bug reports
- **Security**: Two-factor authentication, privacy settings
- **Data Management**: Data export, notifications
- **Shipping & Delivery**: Shipping times, tracking
- **Privacy**: Privacy settings, data sharing

## 📁 Project Structure

```
semantic-search-embeddings/
├── src/
│   ├── client/
│   │   └── open-ai-sdk.ts    # OpenAI client and embedding functions
│   └── docs/
│       └── documents.ts      # Knowledge base with instructions
├── cli.ts                    # Command line interface
├── index.ts                  # Original script
├── package.json
└── tsconfig.json
```

## 🔧 Available Scripts

- `npm start`: Run the original script
- `npm run cli`: Run the main CLI
- `npm run search`: Run direct search

## 🛡️ Error Handling

The system includes robust error handling:
- Input validation
- OpenAI API error handling
- Colored and informative error messages
- Graceful degradation in case of failures

## 📈 Performance

- Typical response time: 1-3 seconds
- Embedding cache for better performance
- Results sorted by relevance score
- Smart instruction display based on similarity

## 🤝 Contributing

1. Fork the project
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is under the MIT license.