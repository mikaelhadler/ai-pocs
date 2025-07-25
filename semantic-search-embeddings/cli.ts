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
  .action(async (query: string, options: { limit: string }) => {
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
        console.log(chalk.gray(`   ID: ${result.id} | Score: ${scoreText}`));
        console.log('');
      });

    } catch (error) {
      console.error(chalk.red('❌ Error during search:'));
      console.error(chalk.red(error instanceof Error ? error.message : String(error)));
      process.exit(1);
    }
  });

program
  .command('interactive')
  .description('Interactive mode for multiple queries')
  .option('-l, --limit <number>', 'Maximum number of results', '3')
  .action(async (options: { limit: string }) => {
    console.log(chalk.blue.bold('🤖 Interactive Mode - Semantic Search'));
    console.log(chalk.gray('Type "exit" to quit'));
    console.log(chalk.gray('Type "help" to see available commands'));
    console.log('');

    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const askQuestion = () => {
      rl.question(chalk.cyan('🔍 Enter your query: '), async (query: string) => {
        const trimmedQuery = query.trim();

        if (trimmedQuery.toLowerCase() === 'exit') {
          console.log(chalk.green('👋 Goodbye!'));
          rl.close();
          return;
        }

        if (trimmedQuery.toLowerCase() === 'help') {
          console.log(chalk.yellow('📖 Available commands:'));
          console.log(chalk.gray('  - exit: Quit the program'));
          console.log(chalk.gray('  - help: Show this help'));
          console.log(chalk.gray('  - Anything else will be treated as a query'));
          console.log('');
          askQuestion();
          return;
        }

        if (trimmedQuery === '') {
          console.log(chalk.yellow('⚠️  Please enter a valid query.'));
          console.log('');
          askQuestion();
          return;
        }

        try {
          console.log(chalk.blue('🔍 Searching...'));
          const startTime = Date.now();
          const results = await getEmbeddedDocs(trimmedQuery);
          const endTime = Date.now();

          console.log(chalk.green(`✅ Search completed in ${endTime - startTime}ms`));
          console.log('');

          const limit = parseInt(options.limit);
          const topResults = results.slice(0, limit);

          if (topResults.length === 0) {
            console.log(chalk.yellow('⚠️  No results found.'));
          } else {
            console.log(chalk.cyan.bold('📋 Results:'));
            console.log('');

            topResults.forEach((result, index) => {
              const scorePercent = (result.score * 100).toFixed(1);
              const scoreColor = result.score > 0.7 ? chalk.green : result.score > 0.5 ? chalk.yellow : chalk.red;
              const scoreText = scoreColor(`(${scorePercent}% similar)`);
              
              console.log(chalk.white.bold(`${index + 1}. ${result.content}`));
              console.log(chalk.gray(`   ID: ${result.id} | Score: ${scoreText}`));
              console.log('');
            });
          }

        } catch (error) {
          console.error(chalk.red('❌ Error during search:'));
          console.error(chalk.red(error instanceof Error ? error.message : String(error)));
        }

        console.log(chalk.gray('─'.repeat(50)));
        askQuestion();
      });
    };

    askQuestion();
  });

program.parse(); 