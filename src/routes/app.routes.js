import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Register from '../pages/Register';

import { AntDesign, Feather } from '@expo/vector-icons';
import { useNav } from './../context/navigation';

const StackScreen  = createStackNavigator();
const DrawerScreen = createDrawerNavigator();

const iconDrawer  = {
  size:15
}

const styles = StyleSheet.create({
  LeftMenu:{
    paddingTop:30,
    backgroundColor:'black',
    flex:1,
    zIndex:5
  }
});

const LeftMenu = (props)=>{
  return(
    <View style={styles.LeftMenu} >
      <DrawerItemList { ...props} />
    </View>
  )
}

const DrawerNavigation = (props) => {

  const { setNav } = useNav();
  setNav(props);

  return (
    <DrawerScreen.Navigator
      initialRouteName="Home"
      //drawerStyle={{ backgroundColor: '#000' }}
      drawerContentOptions={{
        labelStyle: { color: '#fff' },
        activeBackgroundColor: '#B90100',
        //activeBackgroundColor:'transparent',
        activeTintColor: '#B90100'
      
      }}
     drawerContent = {LeftMenu}
    >
      <DrawerScreen.Screen
        name='Perfil'
        component={Perfil}
        options={{
          drawerIcon: ({}) => <Feather name='user' size={iconDrawer.size} color='white' />,
          headerShown:true
        }}
      />

      <DrawerScreen.Screen
        name='Home'
        component={Home}
        options={{
          drawerIcon: ({}) => <AntDesign name='home' size={iconDrawer.size} color='white' />,
        }}
      />
   
 
    </DrawerScreen.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackScreen.Navigator initialRouteName='Login'>
        <StackScreen.Screen
          name='Login'
          key ='Login'
          component={Login}
          options={{ headerShown: false, headerLeft:null, gestureEnabled: false }}
        />
        <StackScreen.Screen
          name='DrawerMenu'
          key='DrawerMenu'
          component={DrawerNavigation}
          options={{ headerShown: false, headerLeft:null, gestureEnabled: false }}
        />

        <StackScreen.Screen
          name='Registar'
          key='Registar'
          component={Register}
          options={{ headerShown: false, headerLeft:null, gestureEnabled: false }}
        />
      </StackScreen.Navigator>
    </NavigationContainer>
  );
};
export default  AppRoutes;

/*
<StackScreen.Screen
  name='Registar'
  key='Registar'
  component={Register}
  options={{ headerShown: false, headerLeft:null, gestureEnabled: false }}
/>
*/