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
  TEXT_DARK_BLACK,
  PEACH
} from '../../Assets/Colors';
import AppText from '../../Components/AppText';
import UserHeader from '../../Components/UserHeader';
import Card from '../../Components/Card';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AppHeader from '../../Components/AppHeader';

const BookmarkBlog = (props) => {

    const [selectState, setSelectState] = useState(false)

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

  const renderBlogs = item => <Blog item={item.item} />;

  const Blog = ({item}) => {
      const [isSelected, setIsSelected] = useState(false)
      let  onPressHandler;

      if(selectState){
          onPressHandler = ()=>{setIsSelected(!isSelected)}
      }
      else{
        onPressHandler = ()=>props.navigation.navigate('Blog')
      }

    return (
      <TouchableOpacity
        delayLongPress={1000}
        onPress = {onPressHandler}
        
        style={[styles.blogImage,isSelected&&{
            // backgroundColor:'red'
        }]}>

        <View>
            <Image source={item.image}style={{ marginBottom: 8, }}/>
                
            <View style = {{position:'absolute',right:5, top:5}}>
                {selectState?(
                    isSelected?(<Image source = {require('../../Assets/Images/Home/selectTick.png')}/>):(<Image source = {require('../../Assets/Images/Home/unselectTick.png')}/>)
                ):(null)}
            </View>
        </View>



        <AppText button size={14}  color={TEXT_BLACK}  textStyle={{marginBottom: 5, lineHeight: 22}}>Richard McClintock a Latin professor at Hampden.</AppText>
        <AppText  alertText  size={12}  color={TEXT_GREY}  textStyle={{marginBottom: 8, lineHeight: 18}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a...{' '}</AppText>
        
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


  return (
    <View style={styles.container}>
        <AppHeader {...props} extraButton = {selectState?'UnSelect':'Select'} onPressExtra = {()=>{setSelectState(!selectState)}} title="Bookmark Blogs"/>
        <View style = {styles.card}>
          <SafeAreaView style={[{marginVertical: 10},selectState && {height:'93%'}]}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Blogs.Blog.slice(0,4)}
              renderItem={renderBlogs}
              keyExtractor={item => item.id}
              contentContainerStyle = {{paddingBottom:75}}
            />

          </SafeAreaView>
        </View>
        {selectState?(
                    <TouchableOpacity
                    //   onPress={() => navigation.navigate('PermissionScreen')}
                      style={{
                        height: 60,
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: BLUE,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <AppText button color={WHITE}>
                        Remove (2)
                      </AppText>
                    </TouchableOpacity>
            ):(null)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },  
  card: {
    backgroundColor: PEACH,
    width: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    alignItems:'center',
  },
  
  blogImage:{
    backgroundColor: WHITE,
    marginBottom: 10,
    borderRadius: 18,
    padding: 8,
  },
});

export default BookmarkBlog;
