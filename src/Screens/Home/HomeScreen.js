import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  BLUE,
  WHITE,
  TEXT_GREY,
  TEXT_BLACK,
  TEXT_LIGHT_BLUE,
  TEXT_DARK_BLACK
} from '../../Assets/Colors';
import AppText from '../../Components/AppText';
import UserHeader from '../../Components/UserHeader';
import Card from '../../Components/Card';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const HomeScreen = props => {
  const Images = {
    images: [
      {
        id: '1',
        image: require('../../Assets/Images/Home_Screen_Live_Sessions/Img1.png'),
      },
      {
        id: '2',
        image: require('../../Assets/Images/Home_Screen_Live_Sessions/Img2.png'),
      },
      {
        id: '3',
        image: require('../../Assets/Images/Home_Screen_Live_Sessions/Img3.png'),
      },
      {
        id: '4',
        image: require('../../Assets/Images/Home_Screen_Live_Sessions/Img4.png'),
      },
      {
        id: '5',
        image: require('../../Assets/Images/Home_Screen_Live_Sessions/Img5.png'),
      },
      {
        id: '6',
        image: require('../../Assets/Images/Home_Screen_Live_Sessions/Img6.png'),
      },
      {
        id: '7',
        image: require('../../Assets/Images/Home_Screen_Live_Sessions/Img7.png'),
      },
    ],
  };

  const Blogs = {
    Blog: [
      {
        id: '1',
        image: require('../../Assets/Images/Home_Screen_Blogs/Img1.png'),
      },
      {
        id: '2',
        image: require('../../Assets/Images/Home_Screen_Blogs/Img2.png'),
      },
      {
        id: '3',
        image: require('../../Assets/Images/Home_Screen_Blogs/Img3.png'),
      },
      {
        id: '4',
        image: require('../../Assets/Images/Home_Screen_Blogs/Img4.png'),
      },
      {
        id: '5',
        image: require('../../Assets/Images/Home_Screen_Blogs/Img5.png'),
      },
      {
        id: '6',
        image: require('../../Assets/Images/Home_Screen_Blogs/Img6.png'),
      },
      {
        id: '7',
        image: require('../../Assets/Images/Home_Screen_Blogs/Img7.png'),
      },
      {
        id: '8',
        image: require('../../Assets/Images/Home_Screen_Blogs/Img8.png'),
      },
    ],
  };

  const Sports = {
      sport:[
          {id:'1', image:require('../../Assets/Images/Home_Screen_Sports/Img1.png')},
          {id:'2', image:require('../../Assets/Images/Home_Screen_Sports/Img2.png')},
          {id:'3', image:require('../../Assets/Images/Home_Screen_Sports/Img3.png')},
          {id:'4', image:require('../../Assets/Images/Home_Screen_Sports/Img4.png')},
          {id:'5', image:require('../../Assets/Images/Home_Screen_Sports/Img5.png')},
      ]
  }

  const Topics = {
    topic: [
      {
        id: '1',
        title: 'Design',
        image: require('../../Assets/Images/Discover_More/Design.png'),
      },
      {
        id: '2',
        title: 'Marketing',
        image: require('../../Assets/Images/Discover_More/Marketing.png'),
      },
      {
        id: '3',
        title: 'Fun',
        image: require('../../Assets/Images/Discover_More/Fun.png'),
      },
      {
        id: '4',
        title: 'Health',
        image: require('../../Assets/Images/Discover_More/Health.png'),
      },
      {
        id: '5',
        title: 'Food',
        image: require('../../Assets/Images/Discover_More/Food.png'),
      },
      {
        id: '6',
        title: 'Movies',
        image: require('../../Assets/Images/Discover_More/Movies.png'),
      },
    ],
  };

  const renderItem = item => <Item item={item.item} />;

  const Item = ({item}) => {
    return (
      <TouchableOpacity
      // onPress={() => {
      //   OnPressService(item._id, item.name);
      // }}
      >
        <Image
          source={item.image}
          style={{
            marginRight: 15,
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderBlogs = item => <Blog item={item.item} />;

  const Blog = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Blog")
        }}
        style={styles.blogImage}>
        <Image
          source={item.image}
          style={{
            marginBottom: 8,
          }}
        />
        <AppText
          button
          size={14}
          color={TEXT_BLACK}
          textStyle={{marginBottom: 5, lineHeight: 22}}>
          Richard McClintock a Latin professor at Hampden.
        </AppText>
        <AppText
          alertText
          size={12}
          color={TEXT_GREY}
          textStyle={{marginBottom: 8, lineHeight: 18}}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a...{' '}
        </AppText>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <AppText size={12} color={TEXT_LIGHT_BLUE}>
              Andrew Mitchell
            </AppText>
            <View
              style={styles.bullet}></View>
            <AppText size={12} color={TEXT_LIGHT_BLUE}>
              32 min ago
            </AppText>
          </View>
          <View style={{flexDirection: 'row', right: 10}}>
            <Feather name={'heart'} size={20} style={{marginRight: 10}} />
            <Feather name={'bookmark'} size={20} style={{marginRight: 10}} />
            <Ionicons name={'share-social-outline'} size={20} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSports = item => <Sport item={item.item} />;

  const Sport = ({item}) => {
    return (
      <TouchableOpacity
        // onPress={() => {
        //   OnPressService(item._id, item.name);
        // }}
        style={styles.sportImage}>
        <Image
          source={item.image}
          style={{
            marginRight: 8,
          }}
        />
        <View>
        <AppText
          button
          size={14}
          color={TEXT_BLACK}
          textStyle={{marginBottom: 5, lineHeight: 22, width:190}}>
         Top 10 Richest Footballer in the World in 2020
        </AppText>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <AppText size={12} color={TEXT_LIGHT_BLUE}>
              Andrew Mitchell
            </AppText>
            <View
              style={styles.bullet}></View>
            <AppText size={12} color={TEXT_LIGHT_BLUE}>
              32 min ago
            </AppText>
          </View>
        </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMore = item => <More item={item.item} />;

const More = ({item}) => {
  return (
    <TouchableOpacity
    // onPress={() => {
    //   OnPressService(item._id, item.name);
    // }}
    style = {{paddingHorizontal:2,marginVertical:8}}
    >
      <Image source={item.image} />
      <AppText
          alertText
          size={14}
          color={TEXT_DARK_BLACK}
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
      <UserHeader  {...props}/>
      <Card>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AppText subtitle size={16}>
              Live Sessions
            </AppText>
            <TouchableOpacity>
              <AppText size={14} color={BLUE}>
                View all
              </AppText>
            </TouchableOpacity>
          </View>
          <SafeAreaView style={{marginVertical: 10}}>
            <FlatList
              horizontal
              data={Images.images}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AppText subtitle size={16}>
              Interested Blogs
            </AppText>
            <TouchableOpacity>
              <AppText size={14} color={BLUE}>
                View all
              </AppText>
            </TouchableOpacity>
          </View>
          <SafeAreaView style={{marginVertical: 10}}>
            <FlatList
              data={Blogs.Blog.slice(0,4)}
              renderItem={renderBlogs}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AppText subtitle size={16}>
              Sports
            </AppText>
            <TouchableOpacity>
              <AppText size={14} color={BLUE}>
                View all
              </AppText>
            </TouchableOpacity>
          </View>
          <SafeAreaView style={{marginVertical: 10}}>
            <FlatList
              horizontal
              data={Sports.sport}
              renderItem={renderSports}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
          <SafeAreaView style={{marginVertical: 10}}>
            <FlatList
              data={Blogs.Blog.slice(4,6)}
              renderItem={renderBlogs}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AppText subtitle size={16}>
              Discover more
            </AppText>
            <TouchableOpacity >
              <SimpleLineIcons name={'options-vertical'} size={20} />
            </TouchableOpacity>
          </View>
          <SafeAreaView style={{marginTop: 10,alignItems:'center', marginBottom:15}}>
            <FlatList
            numColumns={3}
              data={Topics.topic}
              renderItem={renderMore}
              keyExtractor={item => item.id}
              contentContainerStyle = {{alignSelf:'center'}}
            />
          </SafeAreaView>
          <SafeAreaView style={{marginTop: 10, marginBottom:30}}>
            <FlatList
              data={Blogs.Blog.slice(6,8)}
              renderItem={renderBlogs}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
  },
  blogImage:{
    //   alignItems: 'center',
    backgroundColor: WHITE,
    marginBottom: 10,
    borderRadius: 18,
    padding: 8,
  },
  bullet:{
    backgroundColor: TEXT_LIGHT_BLUE,
    width: 4,
    height: 4,
    borderRadius: 50,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  sportImage:{
    //   alignItems: 'center',
    backgroundColor: WHITE,
    marginBottom: 10,
    marginRight:10,
    borderRadius: 18,
    padding: 8,
    flexDirection:'row',
  //   width:300
  }
});

export default HomeScreen;
