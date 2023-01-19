/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {QueryClient, QueryClientProvider} from 'react-query';

import Apollo from './src/containers/Core/Apollo/Apollo';

import Navigation from './src/containers/Core/navigation/Navigation';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Apollo>
          <Navigation />
        </Apollo>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
