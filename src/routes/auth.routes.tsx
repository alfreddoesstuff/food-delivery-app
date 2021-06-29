import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerLeft: () => null,
        headerTitle: 'Entrar',
        headerTintColor: '#333',
        headerStyle: {
          backgroundColor: '#ffff',
          shadowRadius: 0,
          shadowOffset: { width: 0, height: 0 },
        },
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerTitle: 'Cadastro',
        headerTintColor: '#333',
        headerStyle: {
          backgroundColor: '#ffff',
          shadowRadius: 0,
          shadowOffset: { width: 0, height: 0 },
        },
        headerLeft: () => null,
      }}
    />
  </Stack.Navigator>
);

export default AuthRoutes;
