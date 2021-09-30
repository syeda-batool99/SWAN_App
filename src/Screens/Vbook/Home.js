import React, {useEffect, useState} from 'react';
import {  View,StyleSheet,ScrollView, Modal} from 'react-native';
import {PEACH, DARK_PEACH, BROWN_SHADE, RED} from './../../Assets/Colors/index';
import VbookScrollView from '../../Components/VbookScrollView';
import SearchBar from '../../Components/SearchBar';
import AppText from './../../Components/AppText';
import SplashScreen from './splash';
import SearchBookList from './SearchBookList';


const VBookHome = (props) => {
  const [search, setSearch] = useState('');
  const [modalVisible,setModalVisible] = useState(true)
  const [searchModal,setSearchModal] = useState(false)
  const {navigation} = props

  useEffect(()=>{
    setTimeout(()=>{
      setModalVisible(false)
    },1000)
  },[])

  return (
    <View style={styles.container}>
      <Modal onRequestClose = {()=>setModalVisible(!modalVisible)} visible = {modalVisible}>
        <SplashScreen />
      </Modal>
      <Modal animationType = "slide" onRequestClose = {()=>setSearchModal(!searchModal)} visible = {searchModal} transparent = {false}>
        <SearchBookList  search = {search} setSearch = {setSearch}/>
      </Modal>
      <View style = {styles.nestedContainer}>
        <View style= {styles.header}>
          <AppText heading >Vbook</AppText>
        </View>
        <ScrollView contentContainerStyle = {{paddingBottom:100}}>

            <SearchBar search = {search} onFocus={()=>setSearchModal(!searchModal)}  setSearch = {()=>setSearch} />
    
            <VbookScrollView navigation = {navigation} title ='Trending books'/>
            <VbookScrollView navigation = {navigation} title ='From your Library'/>
            <VbookScrollView navigation = {navigation} title ='Comic Books' />
            <VbookScrollView navigation = {navigation} title ='Best of autobiography'/>
            <VbookScrollView navigation = {navigation} title ='Balbhaskar'/>

        </ScrollView>
            
      </View> 
    </View>
  );
};

export default VBookHome;

const styles = StyleSheet.create({
  container:{
    backgroundColor:PEACH,
    height:'100%',
    width:'100%'
  },
  nestedContainer:{
    width:'90%',
    alignSelf:'center'
  },
  header:{
    // justifyContent:'center',
    alignSelf:'center',
    // flex:1,
    paddingVertical:25
  }
})
