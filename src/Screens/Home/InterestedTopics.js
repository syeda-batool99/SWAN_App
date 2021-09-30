import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import AppHeader from '../../Components/AppHeader';
import AppText from '../../Components/AppText';
import * as Colors from '../../Assets/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InterestedTopics = props => {
  
  const makeSelected = id => {
    Topics.topic.find((id)=>{
        topic.selected(!selected);
    })
  };
  const Topics = {
    topic: [
      {
        id: '1',
        title: 'Business',
        image: require('../../Assets/Images/Topics/Business.png'),
        selected:false
      },
      {
        id: '2',
        title: 'Politics',
        image: require('../../Assets/Images/Topics/Politics.png'),
        selected:false
      },
      {
        id: '3',
        title: 'Sports',
        image: require('../../Assets/Images/Topics/Sports.png'),
        selected:false
      },
      {
        id: '4',
        title: 'Games',
        image: require('../../Assets/Images/Topics/Games.png'),
        selected:false
      },
      {
        id: '5',
        title: 'World',
        image: require('../../Assets/Images/Topics/World.png'),
        selected:false
      },
      {
        id: '6',
        title: 'Sciene',
        image: require('../../Assets/Images/Topics/Science.png'),
        selected:false
      },
      {
        id: '7',
        title: 'Design',
        image: require('../../Assets/Images/Topics/Design.png'),
        selected:false
      },
      {
        id: '8',
        title: 'Marketing',
        image: require('../../Assets/Images/Topics/Marketing.png'),
        selected:false
      },
      {
        id: '9',
        title: 'Fun',
        image: require('../../Assets/Images/Topics/Fun.png'),
        selected:false
      },
      {
        id: '10',
        title: 'Health',
        image: require('../../Assets/Images/Topics/Health.png'),
        selected:false
      },
      {
        id: '11',
        title: 'Food',
        image: require('../../Assets/Images/Topics/Food.png'),
        selected:false
      },
      {
        id: '12',
        title: 'Movies',
        image: require('../../Assets/Images/Topics/Movies.png'),
        selected:false
      },
    ],
  };

  const renderItem = item => <Item item={item.item} />;

  const Item = ({item}) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <TouchableOpacity
        style={{marginHorizontal:5, marginVertical: 10}}
        onPress={() => {
          setIsSelected(!isSelected);
        }}>
        <Image source={item.image} />
 
        <AntDesign
          name={'check'}
          size={20}
          style={isSelected ? [styles.iconSelected] : [styles.iconUnSelected]}
        />

        <AppText
          alertText
          size={14}
          color={Colors.TEXT_DARK_BLACK}
          center
          textStyle={{
            marginTop: 3,
            width: 100,
          }}>
          {item.title}
        </AppText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader title={'Interested topics'} {...props} />
      <AppText
        alertText
        center
        color={Colors.TEXT_BLUE}
        size={14}
        textStyle={{marginVertical: 20}}>
        Please, select your interested topic
      </AppText>
      <ScrollView contentContainerStyle={{paddingBottom:20,width:'100%', alignSelf:'center', alignItems:'center'}}>
        <FlatList
          numColumns={3}
          data={Topics.topic}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <View
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          bottom: 15,
        }}>
        <TouchableOpacity
          onPress = {()=>props.navigation.navigate('MainHome')}
          style={{
            flex: 1,
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: Colors.BLUE,
            borderRadius: 10,
            bottom: 0,
            position: 'absolute',
          }}>
          <AppText button color={Colors.WHITE} center>
            Apply
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InterestedTopics;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.PEACH,
  },
  iconSelected: {
    position: 'absolute',
    top: -8,
    right: 2,
    borderRadius: 50,
    padding: 2,
    backgroundColor: Colors.GREEN,
    color:Colors.WHITE
  },
  iconUnSelected: {
    position: 'absolute',
    top: -8,
    right: 2,
    borderRadius: 50,
    paddingHorizontal: 2,
    paddingTop:3,
    backgroundColor: Colors.WHITE,
    color:'#D3D3D3',
    borderColor:'#D3D3D3',
    borderWidth:2,
    textAlign:'center'
  },
});
