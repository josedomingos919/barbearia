import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';


export default function ListProduct(props){

    function getStarts(num){
        let max  = 5;
        let just = 0;
        let vet  = [];
        
        for(let i=0; i< num; i++){
            just++;
            vet.push(<AntDesign key={i+""} style={styles.ico} name='star' size={11.5} color='yellow' />);
        }

        while(just < max){
            just ++;
            vet.push(<AntDesign key={just+""} style={styles.ico} name='staro' size={11.5} color='#00000080' />);
        }

        return vet
    }
    console.log(props);
    return(
        <View style={styles.box1}>
            <View style={styles.imgContainer} key={"vw1"}>
                <Text style={styles.news22}>Adiquirir</Text>
                <Image  style={styles.prodImg}  source={require('./../../assets/img/fundo.jpg')}  />
            </View>
            <View key={"a46"} style={{width:'65%'}} >
                <View style={styles.vwInfo} key={"vw2"}>
                        <Text key={"tt1"} style={styles.title1}>Hesco</Text>
                            <Text key={"tt2"} style={styles.title2}>Escovinho com Testando em teste 2 0 rello</Text>
                        <View key={"v1"}  style={styles.vw2text} key={"tt3"} >
                            <Text style={styles.sub1} key={"ttt1"} >1344 Kz</Text>
                            <Text style={styles.sub2} key={"ttt2"}>2727 Kz</Text>
                        </View>
                        <View key={"v2"}  style={styles.vw2text} key={"tt4"} >
                            {getStarts(3)}
                            <Text style={styles.sub3} key={"ttt2"}>Estrelas</Text>
                        </View>
                        <Text style={styles.sub4}>Desde 14 Janeiro, 2020</Text>
                    </View>
            </View>
        </View>
    )
}

/*


                
*/