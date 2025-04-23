#!/usr/bin/env node
import { Command } from 'commander';
import { showMenu } from './ui/menu/inGame.js';
import { showLoginMenu } from './ui/menu/mainMenu.js';


const program = new Command();

program
  .name('cliGame')
  .description('Um jogo CLI em TypeScript')
  .version('1.0.0');

program
  .command('start')
  .description('Inicia o jogo')
  .action(async () => {
    await showLoginMenu();
});

program.parse(process.argv);