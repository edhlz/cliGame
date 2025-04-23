import blessed from 'blessed';
import { showMenu } from './inGame.js'; 
import chalk from 'chalk';

export async function showLoginMenu(): Promise<void> {
  const screen = blessed.screen({
    smartCSR: true,
    title: 'Fishing Simulator - Boas-Vindas',
  });


  const welcomeBox = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Bem-vindo ao Fishing Simulator em CLI!\n\nDeseja começar a jogar?',
    align: 'center',
    valign: 'middle',
    border: {
      type: 'line',
    },
    style: {
      fg: 'white',
      bg: 'black',
      border: {
        fg: 'white',
      },
    },
  });

  const options = blessed.list({
    top: '70%', 
    left: 'center',
    width: '30%',
    height: '20%',
    items: [chalk.green('Jogar'), chalk.red('Sair') ], 
    border: {
      type: 'line',
    },
    style: {
      fg: 'white',
      bg: 'black',
      border: {
        fg: 'white',
      },
      selected: {
        bg: 'blue',
        fg: 'white',
      },
    },
    keys: true,
    vi: true,
  });

  screen.append(welcomeBox);
  screen.append(options);

  options.focus();

  options.on('select', (item) => {
    const choice = item.getText();
    if (choice === 'Sair') {
      screen.destroy();
      console.log('Até a próxima!');
      process.exit(0);
    } else if (choice === 'Jogar') {
      screen.destroy(); 
      showMenu(); 
    }
  });

  screen.render();
}

export { showMenu };
