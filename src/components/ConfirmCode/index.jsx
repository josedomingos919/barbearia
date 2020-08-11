import React,{
    useRef,
    useState
} from "react";
import {
    View,
    Text,
    TextInput,
    Alert,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    Keyboard
} from 'react-native';
import styles from './style';
import Ripple from 'react-native-material-ripple';
import { useNav } from './../../context/navigation';

export default function ConfirmCode(props){

    const [valid , setValid] =  useState(null);
    const [codigo,setCodigo] = useState("");
    const { Nav } = useNav();

    const isCorrect = ()=>{
        
        if(codigo == "") return;

        if(codigo == 123){
            Keyboard.dismiss();
            props.setOpenModal(false);
            Nav.navigation.navigate('Registar', { screen: 'Registar' });
            return true;
        } 

        setValid(false);
        return false;
    }


    return(
        <>
        <View style={styles.modalView}>
            <Text>Código de Acesso</Text>
            { valid === false ? <Text style={styles.wornig}>Código não existe!</Text> : <></> }
            
            <TextInput
                maxLength={8}
                style={styles.txtI}
                keyboardType="numeric"
                secureTextEntry={true}
                value={codigo}
                onChangeText={txt=>{
                    setValid(null);
                    setCodigo(txt);
                }}
            />
            <View style={styles.footer}>
                <Ripple 
                    onPress={isCorrect}
                    style={styles.backActive}
                >
                    <Text style={styles.btnConf}>Confirmar</Text>
                </Ripple>
            </View>
        </View>
        </>
    )
}

/*

                <TouchableOpacity >
                    
                </TouchableOpacity>
*/