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

import {QueryClient, QueryClientProvider} from 'react-query';

import Apollo from './src/containers/Core/Apollo/Apollo';

import MainScreen from './src/screens/mainScreen';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Apollo>
        <MainScreen />
      </Apollo>
    </QueryClientProvider>
  );
};

export default App;
