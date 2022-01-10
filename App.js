import React from 'react';
 
import { Provider as StoreProvider } from 'react-redux'
import { store } from './src/Redux/Store';
import {StatusBar} from 'react-native'
import MainNavigator from './src/Navigation/RootNavigator';
 
 const App=() => {
 
   return (
     <StoreProvider store={store}>
         <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" animated barStyle={'dark-content'} />
         <MainNavigator/>
     </StoreProvider>
   );
 };
 
 export default App;