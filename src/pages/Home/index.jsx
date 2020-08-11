import React,{
  useState
}from 'react';
import { 
  Text,
  View,
  Alert,
  Modal, 
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
 
} from 'react-native';

import Header from '../../components/Header';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import ListProduct from '../../components/ListProduct';
import ConfirmCode from '../../components/ConfirmCode';
import ModalView from '../../components/ModalView';

const Home = (props) => {
 
  console.log("Home=>",props);
  const [openModal,setOpenModal] = useState(false);

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
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8}
  ];

  const register = ()=>{
    
  }
  

  return (

    <View key={"main"} style={styles.main}>

    <ModalView
      animationType="fade"  //ss"slide"
      transparent={true}
      visible={openModal}
      onTouch={setOpenModal}
      hardwareAccelerated={true}
      onRequestClose={() => {
        setOpenModal(false);
      }}
    >
        <ConfirmCode {...props} setOpenModal={setOpenModal} />
    </ModalView>
      
      <Header {...props} title="Home"/>
      <View key={"box1"} style={styles.box1}>
        <View style={styles.divTxt} key={"v1"}>
          <TextInput style={styles.inputSerach} placeholder="O que está procurando ?..." placeholderTextColor="black" />
          <AntDesign style={styles.inputSerachIco} name='search1' size={19.5} color='black' />
        </View>
      </View>

      <View key={"box20"} style={styles.box2} >

        <TouchableOpacity 
          key={"ts1"} 
          style={[styles.box2Btn,styles.box2BtnBorde]} 
          onPress={register}
        >
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
          renderItem={({ item })=><ListProduct setOpenModal={setOpenModal} data={item}/>
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