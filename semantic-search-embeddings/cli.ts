#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { getEmbeddedDocs } from './src/client/open-ai-sdk';

const program = new Command();

program
  .name('semantic-search')
  .description('CLI for semantic search using OpenAI embeddings')
  .version('1.0.0');

program
  .command('search')
  .description('Perform semantic search')
  .argument('<query>', 'Query to search for')
  .option('-l, --limit <number>', 'Maximum number of results', '3')
  .option('-i, --instructions', 'Show detailed instructions for top result', false)
  .action(async (query: string, options: { limit: string; instructions: boolean }) => {
    try {
      console.log(chalk.blue('🔍 Starting semantic search...'));
      console.log(chalk.gray(`Query: "${query}"`));
      console.log(chalk.gray(`Result limit: ${options.limit}`));
      console.log('');

      const startTime = Date.now();
      const results = await getEmbeddedDocs(query);
      const endTime = Date.now();

      console.log(chalk.green(`✅ Search completed in ${endTime - startTime}ms`));
      console.log('');

      const limit = parseInt(options.limit);
      const topResults = results.slice(0, limit);

      if (topResults.length === 0) {
        console.log(chalk.yellow('⚠️  No results found.'));
        return;
      }

      console.log(chalk.cyan.bold('📋 Most relevant results:'));
      console.log('');

      topResults.forEach((result, index) => {
        const scorePercent = (result.score * 100).toFixed(1);
        const scoreColor = result.score > 0.7 ? chalk.green : result.score > 0.5 ? chalk.yellow : chalk.red;
        const scoreText = scoreColor(`(${scorePercent}% similar)`);
        
        console.log(chalk.white.bold(`${index + 1}. ${result.content}`));
        console.log(chalk.gray(`   Category: ${result.category} | Score: ${scoreText}`));
        console.log('');
      });

      // Show detailed instructions for the top result if requested or if it has high similarity
      const topResult = topResults[0];
      const shouldShowInstructions = options.instructions || topResult.score > 0.6;

      if (shouldShowInstructions) {
        console.log(chalk.blue.bold('📖 Instructions:'));
        console.log(chalk.gray('─'.repeat(60)));
        console.log(chalk.white(topResult.instructions));
        console.log(chalk.gray('─'.repeat(60)));
        console.log('');
      }

      // Show additional helpful results if the top result has low similarity
      if (topResult.score < 0.4 && topResults.length > 1) {
        console.log(chalk.yellow.bold('💡 Other potentially helpful topics:'));
        console.log('');
        topResults.slice(1, 3).forEach((result, index) => {
          const scorePercent = (result.score * 100).toFixed(1);
          console.log(chalk.gray(`• ${result.content} (${scorePercent}% similar)`));
        });
        console.log('');
      }

    } catch (error) {
      console.error(chalk.red('❌ Error during search:'));
      console.error(chalk.red(error instanceof Error ? error.message : String(error)));
      process.exit(1);
    }
  });

program.parse(); 