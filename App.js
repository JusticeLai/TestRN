import * as React from 'react';
import { View, Text ,Button,StyleSheet } from 'react-native';

import Nav from './src/APP/Nav';
import {Provider} from 'react-redux';
import configureStore from './src/reducers/store';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore();

function AppNav() {
  return (
      <Provider store={store}>
          <PersistGate
              loading={null}
              persistor={persistor}
          >
              <Nav />
          </PersistGate>
      </Provider>
  );
}


export default AppNav;


const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
});
