import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../styles';
import Product from '../Product';
import Cuts from '../Cuts';

const Tab = createMaterialTopTabNavigator();

const Register = (props)=>{

    return(
        <>
         <Header {...props} title="Registar" back={true} />
            <Tab.Navigator
                tabBarOptions={{
                    
                    indicatorStyle:{
                        backgroundColor: COLORS.WHITE
                    },
                    style:{
                        backgroundColor: COLORS.PRIMARY,
                        //height:40
                    },
                    labelStyle:{
                        color:COLORS.WHITE,
                        fontWeight:'bold'
                    },
                    pressColor: COLORS.BLACK_05,
                    //activeTintColor: COLORS.WHITE,
                    //inactiveTintColor: 'rgba(0,0,0,0.3)'
                }}
            >
                <Tab.Screen  options={{ 
                    tabBarLabel:'Produtos', 
                    tabBarIcon:(props)=>{
                        console.log("Props111", props);
                        return <Text>12</Text>
                    }
                    }} name="Produtos" component={Product} />
                <Tab.Screen  
                    options={{ tabBarLabel:'Cortes' }} 
                    name="Cortes" 
                    component={Cuts} />
            </Tab.Navigator>
        </>
    )
}
export default Register;