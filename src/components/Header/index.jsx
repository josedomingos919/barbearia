import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './style';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { useNav } from './../../context/navigation';


export default function Header(props){

    const { Nav } = useNav();
    const {navigation }= props;
    
    return(
        <View style={styles.header}>
            <View key={"v1"} style={styles.view2}>
                <View key={"v21"}>

                    { 
                        props.back 
                        ?
                            <TouchableOpacity 
                                style={styles.buttom}
                                onPress={()=>{  Nav.navigation.goBack(); }}
                            >
                                <AntDesign name="arrowleft" size={24} color="white" />
                            </TouchableOpacity> 
                        : 
                        <TouchableOpacity 
                            style={styles.buttom}
                            onPress={()=>{ navigation.openDrawer() }}
                        >
                    
                            <Entypo name="menu" size={25} color="white" />
                        </TouchableOpacity> 
                    }
                    
                </View>
                <View key={"v22"}>
                    <Text style={styles.text} >{props.title}</Text>
                </View>
            </View>
            <View key={"v2"}></View>
        </View>
    )
}