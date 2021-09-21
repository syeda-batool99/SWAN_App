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

  const morePosts = {
    post: [
      {
        id: '1',
        category: 'Sports',
        image: require('../../Assets/Images/Single_Blog/Sports.png'),
      },
      {
        id: '2',
        category: 'Technology',
        image: require('../../Assets/Images/Single_Blog/Technology.png'),
      },
      {
        id: '3',
        category: 'Crime',
        image: require('../../Assets/Images/Single_Blog/Crime.png'),
      },
    ],
  };

  const renderCategories = item => <Category item={item.item} />;

  const Category = ({item}) => {
    return (
      <View style={styles.categoryName}>
        <AppText button size={13} color={Colors.TEXT_DARK_BLACK}>
          {item.name}
        </AppText>
      </View>
    );
  };

  const renderMorePosts = item => <Posts item={item.item} />;

  const Posts = ({item}) => {
    return (
      <View style={styles.postContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.image} />
          <View style={{marginHorizontal: 10, marginVertical: 8, width: '60%'}}>
            {item.category == 'Sports' && (
              <View
                style={[styles.categoryBackground,{width:'40%',backgroundColor: Colors.CYAN,}]}>
                <AppText color={Colors.WHITE}>{item.category}</AppText>
              </View>
            )}
            {item.category == 'Technology' && (
              <View
              style={[styles.categoryBackground,{width:'60%',backgroundColor: '#208CF7'}]}>
                <AppText color={Colors.WHITE}>{item.category}</AppText>
              </View>
            )}
            {item.category == 'Crime' && (
              <View style={[styles.categoryBackground,{width:'35%',backgroundColor: Colors.RED}]}>
                <AppText color={Colors.WHITE}>{item.category}</AppText>
              </View>
            )}
            <AppText button size={14} textStyle={{lineHeight: 22}}>
              Top 10 Richest Footballer in the World in 2020
            </AppText>
            <View style={{flexDirection: 'row'}}>
              <AppText size={12} color={Colors.TEXT_LIGHT_BLUE}>
                Andrew Mitchell
              </AppText>
              <View
                style={styles.bullet}></View>
              <AppText size={12} color={Colors.TEXT_LIGHT_BLUE}>
                32 min ago
              </AppText>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{backgroundColor: Colors.WHITE}}>
      <View style={styles.container}>
        <View>
          <Image
            style={{alignSelf: 'center', width: 350}}
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
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
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
          textStyle={{lineHeight: 28, marginBottom: 10, alignSelf: 'center'}}>
          Don't be afraid to give up the good to go for the great.
        </AppText>
        <View style={styles.horizontalLine} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../Assets/Images/RegisterationCarousel/avatar.png')}
            />
            <View style={{marginLeft: 10}}>
              <AppText button size={14}>
                Steve Jones
              </AppText>
              <AppText size={12} color={Colors.BROWN_SHADE}>
                6 days ago
              </AppText>
            </View>
          </View>
          {following ? (
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <AppText size={13} color={Colors.TEXT_DARK_BLACK}>
                Following
              </AppText>
            </View>
          ) : (
            <TouchableOpacity
              style={{marginVertical: 8}}
              onPress={() => setFollowing(!following)}>
              <View style={{flexDirection: 'row'}}>
                <Feather
                  name={'user-plus'}
                  size={20}
                  style={{marginRight: 5}}
                />
                <AppText size={13} color={Colors.TEXT_DARK_BLACK}>
                  Follow
                </AppText>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View>
        <AppText
          size={14}
          textStyle={{lineHeight: 22, marginHorizontal: 20, marginTop: 10}}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a pieceof classical Latin literature from 45 BC, making
          it over 2000 years old.{' '}
          <Text style={{fontWeight: 'bold'}}>Richard McClintock, </Text> a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words.
        </AppText>
        <AppText
          size={14}
          bold
          textStyle={{
            lineHeight: 22,
            marginHorizontal: 20,
            marginTop: 10,
            width: '60%',
          }}>
          Our has roots in a piece of classical Latin literature &#10140;{' '}
          <Text
            style={{
              textDecorationLine: 'underline',
              color: '#563AD7',
              fontStyle: 'italic',
            }}>
            {' '}
            Go to website{' '}
          </Text>
        </AppText>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Image
            style={{width: 350}}
            source={require('../../Assets/Images/Single_Blog/ContentImage.png')}
          />
        </View>
        <AppText
          subtitle
          size={16}
          textStyle={{lineHeight: 22, marginHorizontal: 20, marginTop: 10}}>
          Create blog posts that serve your larger company goals.
        </AppText>
        <AppText
          size={14}
          textStyle={{lineHeight: 22, marginHorizontal: 20, marginTop: 10}}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words.
        </AppText>
        <AppText
          subtitle
          size={14}
          textStyle={{lineHeight: 22, marginHorizontal: 20, marginTop: 10}}>
          There are many variations of passages of Lorem ipsum available
        </AppText>
        <AppText
          size={14}
          textStyle={{lineHeight: 22, marginHorizontal: 20, marginTop: 10}}>
          - It is a long established fact that a reader will be distracted by
          the readable.
        </AppText>
        <AppText
          size={14}
          textStyle={{lineHeight: 22, marginHorizontal: 20, marginTop: 10}}>
          - Contrary to popular belief, Lorem Ipsum is not simply random text.
        </AppText>
        <AppText
          size={14}
          textStyle={{lineHeight: 22, marginHorizontal: 20, marginTop: 10}}>
          - Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia.
        </AppText>
        <AppText
          size={16}
          color={Colors.CYAN}
          semiBoldItalic
          underline
          textStyle={{
            lineHeight: 26,
            marginHorizontal: 20,
            marginTop: 10,
            textAlign: 'right',
          }}>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </AppText>
        <AppText
          size={14}
          textStyle={{
            lineHeight: 22,
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words.
        </AppText>
      </View>
      <View style={styles.containerBottom}>
        <AppText
          subtitle
          size={16}
          color={Colors.TEXT_BLACK}
          textStyle={{marginVertical: 15}}>
          More from the Steve Jones
        </AppText>
        <SafeAreaView>
          <FlatList
            // horizontal
            data={morePosts.post}
            renderItem={renderMorePosts}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.PEACH,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    // alignItems: 'center',
  },
  containerBottom: {
    // flex: 1,
    backgroundColor: Colors.PEACH,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    // alignItems: 'center',
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
  horizontalLine: {
    width: '90%',
    height: 1,
    backgroundColor: '#DFDFDF',
  },
  categoryName: {
    backgroundColor: Colors.GRAYISH_WHITE,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 15,
    padding: 8,
  },
  postContainer: {
    backgroundColor: Colors.WHITE,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 15,
    padding: 8,
  },
  categoryBackground:{
    borderRadius: 30,
    padding: 5,
    paddingHorizontal: 10,
  },
  bullet:{
    backgroundColor: Colors.TEXT_LIGHT_BLUE,
    width: 4,
    height: 4,
    borderRadius: 50,
    alignSelf: 'center',
    marginHorizontal: 5,
  }
});

export default BlogPost;
