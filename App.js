import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import landingPage from'./pages/landingPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Covid-HELP" component={landingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;