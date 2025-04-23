import blessed from 'blessed';

export async function showMenu(): Promise<void> {

  const screen = blessed.screen({
    smartCSR: true,
    title: 'Fishing Simulator - Jogo',
  });

  const layout = blessed.layout({
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    layout: 'inline', 
  });

  const mapBox = blessed.box({
    parent: layout, 
    width: '70%', 
    height: '100%', 
    border: {
      type: 'line',
    },
    style: {
      fg: 'white', 
      border: {
        fg: 'white', 
      },
    },
    content: '', 
  });


  const menu = blessed.list({
    parent: layout, 
    width: '30%',
    height: '100%', 
    items: ['Explorar', 'Lutar', 'Sair'], 
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

  screen.append(layout);

  menu.focus();

  menu.on('select', (item) => {
    const choice = item.getText(); 
    if (choice === 'Sair') {
      screen.destroy(); 
      console.log('Até a próxima!');
      process.exit(0); 
    } else {

      mapBox.setContent(`Você escolheu: ${choice}`);
      screen.render(); 
    }
  });

  screen.render();
}