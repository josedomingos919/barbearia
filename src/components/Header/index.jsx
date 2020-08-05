import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from './style';
import { Entypo } from '@expo/vector-icons'; 

export default function Header(props){

    return(
        <View style={styles.header}>
            <View key={"v1"} style={styles.view2}>
                <View key={"v21"}>
                    <TouchableOpacity style={styles.buttom}>
                        <Entypo name="menu" size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View key={"v22"}>
                    <Text style={styles.text} >{props.title}</Text>
                </View>
            </View>
            <View key={"v2"}></View>
        </View>
    )
}