import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    centeredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingRight:20,
        paddingLeft:20,
        top:0,
        left:0,
        bottom:0,
        right:0
    },
    vwTouch:{
        top:0,
        left:0,
        position:'absolute',
        width:100,
        height:100,
        width:'100%',
        height:'100%',
        zIndex:-1
    }
});