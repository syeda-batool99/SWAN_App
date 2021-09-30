import React, { useState } from 'react'
import { StyleSheet,Image, TouchableOpacity,FlatList,Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { Library,TrendingBooks } from '../Constants/VBOOK_CONSTANT';
import AppText from './AppText';
import RawBootomSheet from './RawBootomSheet';

const VbookScrollView = (props) => {

  const {title,navigation,onPressPic}=props

const renderItem = item => <Item item={item.item} />;

const Item = ({item}) => {
  const [openSheet,setOpenSheet] = useState(false)

const onPressThumbnailHandler = ()=>{
  if(title == 'From your Library'){
    return (setOpenSheet(!openSheet))
  }else{
    return navigation.navigate('ViewBook')
  }
}

  return (
    <TouchableOpacity onPress = {onPressThumbnailHandler}>
      {openSheet?(<RawBootomSheet setOpenSheet = {()=>setOpenSheet(!openSheet)} />):(null)}
      <Image
        source={item.image}
        style={{marginRight: 15}}
      />
      <Text
         style={{
          fontSize: 14,
          marginTop: 5,
          color: '#272D37',
          width: 100,
          textAlign: 'left',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          marginTop: 5,
          color: '#878381',
         width: 100,
          textAlign: 'left'}}>
        {item.author}
      </Text>
      {item.read && (
        <View style={{marginTop:5, flexDirection:'row', justifyContent:'space-between', width:120}}>
            <View>
      <Progress.Bar progress={0.72} width={95} height={3} color={'#563AD7'} unfilledColor={'#D3D3D3'} borderColor={'white'}/>
      </View>
      <Text style={{fontSize:10, color:'#878381',marginTop:-5}}>{item.read*100 + "%"}</Text>
      </View>
      )}
    </TouchableOpacity>
  );
};

    return (
        <>
            <View
                style={{
                marginTop: 25,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                }}>
                    <AppText button> {title} </AppText>
                <TouchableOpacity onPress = {()=>navigation.navigate('BookList',{title:title})}>
                <Text
                    style={{
                    fontSize: 14,
                    color: '#563AD7',
                    }}>
                    View All
                </Text>
                </TouchableOpacity>
            </View>

            <SafeAreaView
                style={{ marginVertical: 10, paddingHorizontal: 5}}>
                <FlatList
                horizontal
                data={title == 'From your Library'?Library.Books:TrendingBooks.Trending}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    )
}

export default VbookScrollView

const styles = StyleSheet.create({})
