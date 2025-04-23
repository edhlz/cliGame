import blessed from 'blessed';

export function setupGlobalKeys(screen: blessed.Widgets.Screen): void {
    screen.key(['q', 'C-c'], (key) => {
      switch (key.name) {
        case 'q':
        case 'C-c':
          console.log('Saindo do programa...');
          process.exit(0);
      }
    });
  }