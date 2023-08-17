import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

const Stack = createNativeStackNavigator();

function CreateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

const config = {
  screens: {
    Screen1: 'a',
    Screen2: {
      path: 'b/:message',
      parse: {
        message: message => `${message}`,
      },
    },
  },
};

function App(): JSX.Element {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['myapp://app'],
        config,
      }}>
      <CreateStack />
    </NavigationContainer>
  );
}

export default App;
