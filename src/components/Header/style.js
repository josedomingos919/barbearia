
import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export default StyleSheet.create({
    header:{
        backgroundColor: COLORS.PRIMARY,
        height: 50,
        width: '100%',
        display: 'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        elevation:0
    },
    view2:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttomText:{
        color:'white',
        fontSize:20,
        fontWeight: 'bold'
    },
    buttom:{
        paddingLeft: 6,
        paddingRight: 6,
        color:'white',
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
        width: 50,
        height: 50
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
});