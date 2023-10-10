import React from 'react';
import {TranslationProvider} from './src/translation/contexts/TranslationContext';
import NavigationStack from './src/navigation/Stack';
import { ThemeProvider } from './src/themes/ThemeProvider';

function App(): JSX.Element {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <NavigationStack />
      </ThemeProvider>
    </TranslationProvider>
  );
}

export default App;
