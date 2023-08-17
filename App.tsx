import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import LinkingTo from './src/screens/Linking';

const Stack = createNativeStackNavigator();

function CreateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Linking" component={LinkingTo} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

const config = {
  screens: {
    Screen1: 'a',
    Screen2: {
      path: 'b/:date',
      parse: {
        date: date => new Date(Number(date)).toString(),
      },
      stringify: {
        date: date => {
          const d = new Date(date);

          return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
        },
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
