import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import LoginPage from './src/pages/LoginPage';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00A79D',
    accent: 'yellow',
  },
};

function DetailsScreen({ navigation }) {
  return (
    <View style={{ 
      flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HOME PAGE</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider theme={theme} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#00A79D',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="Details" 
            component={DetailsScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#00A79D',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShown: true
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
