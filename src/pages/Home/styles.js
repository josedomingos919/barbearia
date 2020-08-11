
import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export default StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: COLORS.BACKGROUND
    },
    box4:{
        height:38,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
        width:'100%',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    txtBox2:{
        fontWeight:'bold',
        fontSize:15
    },
    box1:{
        backgroundColor: COLORS.PRIMARY,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,
    },
    box2Text:{
        color:'white'
    },
    box2BtnBorde:{
        borderRightWidth:1.3,
        borderRightColor: 'rgba(255,255,255,0.3)'
    },
    box2Btn:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        paddingRight:15,
        paddingLeft:15,
        height: 35
    },
    imgBtn:{
        width:30,
        height:30,
        marginRight:5
    },
    box2:{
        paddingTop:8,
        paddingBottom:8,
        backgroundColor:'black',
        width:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row'
    },
    divTxt:{
        display: 'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        backgroundColor:'white',
        borderRadius: 5,
        paddingRight:5
    },
    inputSerachIco:{
        paddingLeft: 5,
        marginRight:5,
        width:25,
    },
    inputSerach:{
        width:'85%',
        color: 'black',
        fontWeight: 'bold',
        padding:8,
        fontSize:15
    },
    list:{
        flex:1,
        marginTop:15,
        width:'100%',
    }
});