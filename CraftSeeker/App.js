import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from './components/screens/Authentication';
import Background from '../CraftSeeker/components/screens/shared/Background';
import SignUpWorker from './components/screens/workers/SignUpWorker';
import SignUpClient from "../CraftSeeker/components/screens/client/SignUpClient"
import Dashboard from './components/screens/workers/DashBoard/Dashboard';
import WorkerProfil from './components/screens/workers/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="SignUpWorker" component={SignUpWorker} />
        <Stack.Screen name="SignUpClient" component={SignUpClient} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="WorkerProfil" component={WorkerProfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
