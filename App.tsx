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
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';
// import {Provider} from 'react-redux';
// import {setupListeners} from '@reduxjs/toolkit/query';

import Apollo from './src/containers/Core/Apollo/Apollo';
// import store from './src/containers/Core/redux/store/store';

import Navigation from './src/containers/Core/navigation/Navigation';

const App = () => {
  const queryClient = new QueryClient();

  // setupListeners(store.dispatch);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        {/* <Provider store={store}> */}
        <QueryClientProvider client={queryClient}>
          <Apollo>
            <Navigation />
          </Apollo>
        </QueryClientProvider>
        {/* </Provider> */}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
