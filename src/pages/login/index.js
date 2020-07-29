import React, { useEffect, useState }  from 'react';
import { ImageBackground,Text,View, Image,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import * as Font from 'expo-font';

/*
1- Usar icon com expo vector icons,
2- backgroud cover backgroud image,
3- importar font no react
4- drower navegator
const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
*/

//const ImgBack = require("./ori.jpg");

function Login(props){

    const img = {
        fundo : require('./../../assets/img/fundo.jpg'),
        logo  : require('./../../assets/img/logo.png')
    }

    const logar = ()=>{
        Alert.alert("ARX-Barbeary","Bem-Vindo");
    }

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const fonts = {
        'Billabong': require('./../../assets/font/Billabong.ttf'),
    };

    useEffect(() => {
        (async () => {
          try {
            await Font.loadAsync(fonts);
            setLoaded(true);
          } catch (err) {
            setError(err);
          }
    
        })();
      }), [fonts];

      if (error) return <View><Text>{error.message}</Text></View>;
      if (!loaded) return null;
      console.log("Entrou");
    //await Font.loadAsync({
      //  'Billabong': require('./../../assets/font/Billabong.ttf'),
    //});

    return(
        <ImageBackground blurRadius={10} 
            source={img.fundo} 
            style={styles.container} 
        >
            <View style={styles.view}>
                <View style={styles.box1}>
                    <View style={styles.contlogo}><Image style={styles.logo} source={img.logo}/></View>
                    <View style={styles.info}>
                        <Text style={styles.txtInfo}>ARX</Text>
                        <Text style={styles.txtInfo}>Snack</Text>
                        <Text style={styles.txtInfo}>-Barbeary</Text>
                        <Text style={styles.txtInfo}>| Better</Text> 
                    </View>
                </View>  

                <View>
                    <Text style={styles.info1}>Entra feio & sai Bonito</Text>
                </View>

                <View style={styles.inputView}><AntDesign style={styles.ico} name="user" size={20} color="white" /><TextInput style={styles.inputText} placeholder="Email ou Usuário" /></View>
                <View style={styles.inputView}><AntDesign style={styles.ico} name="lock1" size={20} color="white" /><TextInput secureTextEntry={true} style={styles.inputText} placeholder="Palavra-Passe" /></View>

                <View style={styles.buttonView}><TouchableOpacity onPress={logar} style={[styles.buttonViewBtn,styles.btn]} ><FontAwesome style={styles.ico2} name="sign-in" size={20} color="white" /><Text style={styles.txtBtn}>Login</Text></TouchableOpacity></View>
                <View style={styles.buttonView1}><TouchableOpacity style={[styles.btn,styles.btnFacebook]}  ><Text style={styles.txtBtn}>Facebook</Text></TouchableOpacity><Text style={styles.txtOu} >Ou</Text><TouchableOpacity style={[styles.btn,styles.btnGoogle]} ><Text style={styles.txtBtn}>Google</Text></TouchableOpacity></View>

            </View>

        </ImageBackground>
    )
}

export default Login;

const styles = StyleSheet.create({
    ico2:{
        marginRight:10
    },
    ico:{
        marginLeft:10
    },
    txtOu:{
        color:'red',
        fontWeight:'bold'
    },
    btnGoogle:{
        backgroundColor:'#E42D27'
    },
    btnFacebook:{
        backgroundColor:'#124A7B'
    },
    txtBtn:{
        color:'white',
        fontWeight:'bold'
    },
    buttonView1:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2.5,
        padding:12,
    },
    buttonViewBtn:{
        backgroundColor:'#E42D27',
        width:'100%'
    },
    buttonView:{
        //marginTop:5,
        width:'100%',
        marginBottom:20
    },
    inputView:{
        width:'100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 19,
        alignItems: 'center',
        borderWidth:1,
        borderColor:'rgba(255,255,255,0.6)',
        //border: 1px solid rgba(255,255,255,0.6);
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.19)'
    },
    inputText:{
        width: '100%',
        color: 'white',
        padding: 8,
        backgroundColor: 'transparent',
    },
    info1:{
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: 2,
        //fontFamily: 'Billabong',
        fontSize: 18,
        //borderBottom: '0.05rem solid rgba(255,255,255,0.5)',
        borderBottomWidth: 1,
        borderBottomColor:'rgba(255,255,255,0.5)',
        padding: 2,
        borderRadius: 5,
        //borderBottomEndRadius:5,
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom:25
    },
    txtInfo:{
        fontFamily:'Billabong',
        //font-family: 'Billabong' !important;
        //fontFamily:'Billabong',
        fontWeight: 'bold',
        letterSpacing: 3,
        fontSize: 14,
        color: '#B90100',
    },
    info:{
        padding:5,
        paddingLeft:8,
        borderLeftColor:'#B90100',
        borderLeftWidth: 0.5,
        marginLeft: 10,
    },
    box1:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15
    },
    contlogo:{
        width:116,
        height:120
    },
    logo:{
        width: '100%',
        height: '100%'
    },
    view:{
        backgroundColor:'rgba(0,0,0,0.8)',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        justifyContent:"center",
        alignItems:'center',
        paddingLeft: 45,
        paddingRight: 45
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'rgba(0,0,0,0.9)'
    },
  });
  

  /*
  
        
        <ImageBackground blurRadius={10} 
            source={img.fundo} 
            style={styles.container} 
        >

            <View style={styles.view}>  
                
                <View style={styles.box1}>
                    <View style={styles.contlogo}><Image style={styles.logo} source={img.logo}/></View>
                    <View style={styles.info}>
                        <Text style={styles.txtInfo}>ARX</Text>
                        <Text style={styles.txtInfo}>Snack</Text>
                        <Text style={styles.txtInfo}>-Barbeary</Text>
                        <Text style={styles.txtInfo}>| Better</Text> 
                    </View>
                </View>   

                <View>
                    <Text style={styles.info1}>Entra feio & sai Bonito</Text>
                </View>

                <View style={styles.inputView}><AntDesign style={styles.ico} name="user" size={20} color="white" /><TextInput style={styles.inputText} placeholder="Email ou Usuário" /></View>
                <View style={styles.inputView}><AntDesign style={styles.ico} name="lock1" size={20} color="white" /><TextInput secureTextEntry={true} style={styles.inputText} placeholder="Palavra-Passe" /></View>

                <View style={styles.buttonView}><TouchableOpacity onPress={logar} style={[styles.buttonViewBtn,styles.btn]} ><FontAwesome style={styles.ico2} name="sign-in" size={20} color="white" /><Text style={styles.txtBtn}>Login</Text></TouchableOpacity></View>
                <View style={styles.buttonView1}><TouchableOpacity style={[styles.btn,styles.btnFacebook]}  ><Text style={styles.txtBtn}>Facebook</Text></TouchableOpacity><Text style={styles.txtOu} >Ou</Text><TouchableOpacity style={[styles.btn,styles.btnGoogle]} ><Text style={styles.txtBtn}>Google</Text></TouchableOpacity></View>

            </View>
        </ImageBackground>
  */