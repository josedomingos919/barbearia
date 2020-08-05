import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import { AntDesign, Feather } from '@expo/vector-icons';

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

const DrawerNavigation = () => {
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
      <DrawerScreen.Screen 
        name='Home1' component={Home} 
        options={{
          drawerIcon: ({}) => <AntDesign name='home' size={iconDrawer.size} color='white' />,
        }}
      />
      <DrawerScreen.Screen 
        name='Home2' component={Home} 
        options={{
          drawerIcon: ({}) => <AntDesign name='home' size={iconDrawer.size} color='white' />,
        }}
      />
    </DrawerScreen.Navigator>
  );
};

export default AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackScreen.Navigator initialRouteName='login'>
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
      </StackScreen.Navigator>
    </NavigationContainer>
  );
};
