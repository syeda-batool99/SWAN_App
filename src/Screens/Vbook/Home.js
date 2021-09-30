import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {PEACH, DARK_PEACH, BROWN_SHADE, RED} from './../../Assets/Colors/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import { color } from 'react-native-elements/dist/helpers';

const TrendingBooks = {
  Trending: [
    {
      id: '1',
      title: 'Isaac et Charlemagne',
      author: 'Andrew Mitchell',
      image: require('../../Assets/Images/Vbook_Home_Trending_Books/Isaac.png'),
    },
    {
      id: '2',
      title: 'The inheritance games',
      author: 'Andrew Mitchell',
      image: require('../../Assets/Images/Vbook_Home_Trending_Books/TheInheritanceGames.png'),
    },
    {
      id: '3',
      title: 'Npectyaehnce Haja3ahne',
      author: 'Andrew Mitchell',
      image: require('../../Assets/Images/Vbook_Home_Trending_Books/Npectyoaehne.png'),
    },
    {
      id: '4',
      title: 'Joker DC black label worrier',
      author: 'Andrew Mitchell',
      image: require('../../Assets/Images/Vbook_Home_Trending_Books/Joker.png'),
    },
    {
      id: '5',
      title: 'The mighty thor marvel best ...',
      author: 'Andrew Mitchell',
      image: require('../../Assets/Images/Vbook_Home_Trending_Books/Thor.png'),
    },
    {
      id: '6',
      title: 'Black mirror thentire histo...',
      author: 'Andrew Mitchell',
      image: require('../../Assets/Images/Vbook_Home_Trending_Books/BlackMirror.png'),
    },
    {
      id: '7',
      title: 'LOKI where mischied lies..',
      author: 'Andrew Mitchell',
      image: require('../../Assets/Images/Vbook_Home_Trending_Books/Loki.png'),
    },
    {
      id: '8',
      title: 'The Mask omnibus jhon...',
      author: 'Andrew Mitchell',
      image: require('../../Assets/Images/Vbook_Home_Trending_Books/Mask.png'),
    },
  ],
};

const Library = {
    Books: [
      {
        id: '1',
        title: 'Isaac et Charlemagne',
        author: 'Andrew Mitchell',
        image: require('../../Assets/Images/Vbook_Home_Trending_Books/Isaac.png'),
        read: 0.72
      },
      {
        id: '2',
        title: 'The inheritance games',
        author: 'Andrew Mitchell',
        image: require('../../Assets/Images/Vbook_Home_Trending_Books/TheInheritanceGames.png'),
        read: 0.72
      },
      {
        id: '3',
        title: 'Npectyaehnce Haja3ahne',
        author: 'Andrew Mitchell',
        image: require('../../Assets/Images/Vbook_Home_Trending_Books/Npectyoaehne.png'),
        read: 0.72
      },
      {
        id: '4',
        title: 'Joker DC black label worrier',
        author: 'Andrew Mitchell',
        image: require('../../Assets/Images/Vbook_Home_Trending_Books/Joker.png'),
        read: 0.72
      },
      {
        id: '5',
        title: 'The mighty thor marvel best ...',
        author: 'Andrew Mitchell',
        image: require('../../Assets/Images/Vbook_Home_Trending_Books/Thor.png'),
        read: 0.72
      },
      {
        id: '6',
        title: 'Black mirror thentire histo...',
        author: 'Andrew Mitchell',
        image: require('../../Assets/Images/Vbook_Home_Trending_Books/BlackMirror.png'),
        read: 0.72
      },
      {
        id: '7',
        title: 'LOKI where mischied lies..',
        author: 'Andrew Mitchell',
        image: require('../../Assets/Images/Vbook_Home_Trending_Books/Loki.png'),
        read: 0.72
      },
      {
        id: '8',
        title: 'The Mask omnibus jhon...',
        author: 'Andrew Mitchell',
        image: require('../../Assets/Images/Vbook_Home_Trending_Books/Mask.png'),
        read: 0.72
      },
    ],
  };

const renderItem = item => <Item item={item.item} />;

const Item = ({item}) => {
  // console.log('item', item.image);
  return (
    <TouchableOpacity
    // onPress={() => {
    //   OnPressService(item._id, item.name);
    // }}
    >
      <Image
        source={item.image}
        style={{
        //   width: 80,
        //   height: 80,
        //   borderRadius: 50,
          marginRight: 15,
          // overflow: 'hidden',
          // backgroundColor: 'white',
          // opacity: 0.8,
        }}
      />
      <Text
        // adjustsFontSizeToFit= {true}
        // ellipsizeMode={'tail'}
        style={{
          fontSize: 14,
          marginTop: 5,
          color: '#272D37',
        //   fontWeight: 'bold',
          width: 100,
          textAlign: 'left',
          // textAlignVertical: 'center',
          // height: 100,
        }}>
        {item.title}
      </Text>
      <Text
        // adjustsFontSizeToFit= {true}
        // ellipsizeMode={'tail'}
        style={{
          fontSize: 12,
          marginTop: 5,
          color: '#878381',
        //   fontWeight: 'bold',
          width: 100,
          textAlign: 'left',
          // textAlignVertical: 'center',
          // height: 100,
        }}>
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

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: PEACH, paddingHorizontal: 25}}>
      <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 30}}>
        vBook
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
            color:'black',
            borderRadius: 12,
        }}>
        <AntDesign
          name="search1"
          size={25}
          style={{padding: 10, color: '#8F9CA9'}}
        />
        <TextInput
              placeholderTextColor = "grey"

          onChangeText={search => setSearch(search)}
          style={{
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 12,
            fontSize: 14,
            color:'black'
          }}
          placeholder="what are you looking for"
          placeholderTextColor="#8F9CA9"
        />
        <MaterialCommunityIcons
          name="microphone"
          size={25}
          style={{paddingVertical: 10, paddingRight: 20, color: '#8F9CA9'}}
        />
      </View>
      <View
        style={{
          marginTop: 25,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#272D37',
          }}>
          Trending books
        </Text>
        <TouchableOpacity
        // onPress={seeAllServicesPressHandler}
        >
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
          data={TrendingBooks.Trending}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View
        style={{
          marginTop: 15,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#272D37',
          }}>
          From your library
        </Text>
        <TouchableOpacity
        // onPress={seeAllServicesPressHandler}
        >
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
          data={Library.Books}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={{ backgroundColor:'#563AD7', height:168, position:'absolute', bottom:0, width:400, borderTopLeftRadius:32, borderTopRightRadius:32, paddingHorizontal:35, paddingVertical: 30}}>
            <Text style={{fontSize: 16, color:'white'}}>Continue reading</Text>
            <View style={{width:324, height:80, backgroundColor:'white', marginVertical: 10, borderRadius: 12, flexDirection:'row', justifyContent:'space-between', padding:10}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Image source={require('../../Assets/Images/Progress_Pie/Jungle_Book.png')}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={{marginLeft: 10, marginTop:5, fontSize: 14, color:'#272D37'}}>The Jungle Book (1984)</Text>
                    <Text style={{marginLeft: 10, marginTop:10, fontSize: 12, color:'#8F9CA9'}}>Rudyard Kipling</Text>
                    </View>
                </View>
                <View>
                <Progress.Circle size={50} indeterminate={false} progress={0.70} color={'#563AD7'} unfilledColor={'#D3D3D3'} borderColor={'white'} showsText={true} formatText={()=> <Text>75%</Text>} />
                </View>
            </View>
            
      </View>
    </View>
  );
};

export default Home;
