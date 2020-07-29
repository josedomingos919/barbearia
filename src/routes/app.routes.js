import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import { AntDesign, Feather } from '@expo/vector-icons';

const StackScreen = createStackNavigator();
const DrawerScreen = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <DrawerScreen.Navigator
      drawerStyle={{ backgroundColor: '#000' }}
      drawerContentOptions={{
        labelStyle: { color: '#fff' },
        activeBackgroundColor: '#B90100',
      }}
    >
      <DrawerScreen.Screen
        name='Perfil'
        component={Perfil}
        options={{
          drawerIcon: ({}) => <Feather name='user' size={24} color='white' />,
        }}
      />
      <DrawerScreen.Screen
        name='Home'
        component={Home}
        options={{
          drawerIcon: ({}) => <AntDesign name='home' size={24} color='white' />,
        }}
      />
      <DrawerScreen.Screen name='Home1' component={Home} />
      <DrawerScreen.Screen name='Home2' component={Home} />
      <DrawerScreen.Screen name='Home3' component={Home} />
      <DrawerScreen.Screen name='Home4' component={Home} />
    </DrawerScreen.Navigator>
  );
};

export default AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackScreen.Navigator>
        <StackScreen.Screen
          name='Login'
          key='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <StackScreen.Screen
          name='DrawerMenu'
          key='DrawerMenu'
          component={DrawerNavigation}
        />
      </StackScreen.Navigator>
    </NavigationContainer>
  );
};
