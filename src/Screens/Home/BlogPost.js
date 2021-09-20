import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AppText from '../../Components/AppText';
import * as Colors from '../../Assets/Colors/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BlogPost = () => {
  const [following, setFollowing] = useState(false);

  const categories = {
    category: [
      {id: '1', name: 'Art'},
      {id: '2', name: 'Design'},
      {id: '3', name: 'Fun'},
      {id: '4', name: 'Culture'},
      {id: '5', name: '2+'},
    ],
  };

  const renderCategories = item => <Category item={item.item} />;

  const Category = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: Colors.GRAYISH_WHITE,
          marginBottom: 10,
          marginRight: 10,
          borderRadius: 15,
          padding: 8,
        }}>
        <AppText button size={13} color={Colors.TEXT_DARK_BLACK}>
          {item.name}
        </AppText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../Assets/Images/Single_Blog/MainImage.png')}
        />
        <Ionicons name={'arrow-back'} size={30} style={styles.topLeft} />
        <Feather name={'bookmark'} size={25} style={styles.topRight} />
        <Ionicons
          name={'share-social-outline'}
          size={25}
          style={styles.topRightCenter}
        />
        <SimpleLineIcons
          name={'options-vertical'}
          size={23}
          style={styles.topRightCorner}
        />
        <View style={styles.bottomLeft}>
          <FontAwesome name={'heart'} size={15} color={'#FC1052'} />
          <AppText size={12} color={'#FC1052'}>
            {' '}
            175
          </AppText>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <SafeAreaView style={{marginTop: 10}}>
          <FlatList
            horizontal
            data={categories.category}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
      <AppText
        subtitle
        size={20}
        color={Colors.TEXT_BLACK}
        textStyle={{lineHeight: 28, marginBottom: 10}}>
        Don't be afraid to give up the good to go for the great.
      </AppText>
      <View
        style={styles.horizontalLine}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PEACH,
    padding: 20,
    alignItems: 'center',
  },
  topLeft: {
    // backgroundColor: 'hsl(20, 20%, 20%)',
    position: 'absolute',
    top: 15,
    left: 15,
    borderRadius: 50,
    color: Colors.WHITE,
  },
  topRight: {
    // backgroundColor: 'hsl(20, 20%, 20%)',
    position: 'absolute',
    top: 18,
    right: 100,
    borderRadius: 50,
    color: Colors.WHITE,
  },
  topRightCenter: {
    // backgroundColor: 'hsl(20, 20%, 20%)',
    position: 'absolute',
    top: 18,
    right: 60,
    borderRadius: 50,
    color: Colors.WHITE,
  },
  topRightCorner: {
    // backgroundColor: 'hsl(20, 20%, 20%)',
    position: 'absolute',
    top: 18,
    right: 20,
    borderRadius: 50,
    color: Colors.WHITE,
  },
  bottomLeft: {
    // backgroundColor: 'hsl(20, 20%, 20%)',
    position: 'absolute',
    bottom: 15,
    left: 15,
    borderRadius: 50,
    backgroundColor: '#FFDFE2',
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
  },
  horizontalLine:{
    width: '90%',
    height: 1,
    backgroundColor: '#DFDFDF',
  }
});

export default BlogPost;
