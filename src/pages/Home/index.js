import React from 'react';
import { 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';

import Header from '../../components/Header';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import ListProduct from './../../components/ListProduct';

const Home = () => {
  
  const data = [
    {
      id:1,
      lable:'Adiquirir',
      haircut:'Escovinho picante',
      description:'Frances com gel meio',
      oldPrice: 3000,
      rightprice: 2000,
      stars:4,
      date:'Desde 14 Janeiro, 2020'
    },
    {
      id:2,
      lable:'Novo',
      haircut:'Escovinho Cheio',
      description:'Escovinho com cabelo cheio,',
      oldPrice: 3000,
      rightprice: 2000,
      stars:4,
      date:'Desde 14 Janeiro, 2020'
    },
    {
      id:7
    },
    {
      id:8
    },
    {
      id:9
    },
    {
      id:10
    }
  ];

  return (
    <View key={"main"} style={styles.main}>
      <Header title="Home"/>
      <View key={"box1"} style={styles.box1}>
        <View style={styles.divTxt} key={"v1"}>
          <TextInput style={styles.inputSerach} placeholder="O que está procurando ?..." placeholderTextColor="black" />
          <AntDesign style={styles.inputSerachIco} name='search1' size={19.5} color='black' />
        </View>
      </View>

      <View key={"box20"} style={styles.box2} >

        <TouchableOpacity key={"ts1"} style={[styles.box2Btn,styles.box2BtnBorde]} >
          <Image style={styles.imgBtn} source={require('../../assets/ico/img1.png')}  />
          <Text style={styles.box2Text}>Registar</Text>
        </TouchableOpacity>

        <TouchableOpacity key={"ts2"} style={[styles.box2Btn,styles.box2BtnBorde]} >
          <Image style={styles.imgBtn} source={require('../../assets/ico/img2.png')}  />
          <Text style={styles.box2Text}>Listar</Text>
        </TouchableOpacity>

        <TouchableOpacity key={"ts3"} style={styles.box2Btn} >
          <Image style={styles.imgBtn} source={require('../../assets/ico/img3.png')}  />
          <Text style={styles.box2Text}>Contas</Text>
        </TouchableOpacity>

      </View>
      <View key={"box4"} style={styles.box4}>
        <Text style={styles.txtBox2}>29 Resultados encontrados...</Text>
      </View>

      <FlatList 
          key={"l1"}
          style={styles.list}
          data={data}
          keyboardShouldPersistTaps="handled"
          keyExtractor={item=>String(item.id)}
          renderItem={({ item })=><ListProduct data={item}/>
          }
          contentContainerStyle={{
              paddingHorizontal:20,
              showVerticalScrollIndicator: false
          }}
      />

    </View>
  );
};

export default Home;