import React from 'react';
import Order from './components/Order';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8bc34a',
    accent: '#f1c40f',
    background: '#607d8b',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Order showDescription={true} />
    </PaperProvider>
  );
};

export default App;
