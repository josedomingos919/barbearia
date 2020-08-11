import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 
    txtI:{
        fontSize:20,
        marginTop:5,
        textAlign:'center',
        borderBottomWidth:0.4,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        width:'90%'
    },
    wornig:{
        color:'red',
        fontWeight: 'bold',
        fontSize:12,
        backgroundColor: 'rgba(234,67,53,0.2)',
        padding:4,
        borderRadius: 4,
        marginTop:5
    },
    btnConf:{
        marginRight:2,
        marginLeft:2,
        padding:5,
        fontWeight: 'bold',
        color: "#26a69a"
    },
    backActive:{
       padding:2
    },
    footer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:15,
        width:'100%'
    },
    modalView:{
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        alignItems: "center",
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:200,
    }
});