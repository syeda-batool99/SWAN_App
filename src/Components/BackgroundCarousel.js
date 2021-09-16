// import React, { useEffect, useState } from 'react'
// import { StyleSheet, Text, View, ScrollView, Dimensions,Image } from 'react-native'

// const DEVICE_WIDTH = Dimensions.get('window').width
// const DEVICE_HEIGHT = Dimensions.get('window').height

// const BackgroundCarousel = () => {
//     const [selectedIndex, setSelectedIndex] = useState(0)
//     const scrollRef = React.createRef();

//     const images = [
//     require('../Assets/Images/RegisterationCarousel/carousel1.png'),
//     require('../Assets/Images/RegisterationCarousel/carousel2.png'),
//     require('../Assets/Images/RegisterationCarousel/carousel3.png',) ]       
    
    
//     const setIndex = event => {
//         const contentOffset = event.nativeEvent.contentOffset;
//         const viewSize = event.nativeEvent.layoutMeasurement;
    
//         // Divide the horizontal offset by the width of the view to see which page is visible
//         const Index = Math.floor(contentOffset.x / viewSize.width);
//         setSelectedIndex(Index)
//       };

//       console.log("Image index", selectedIndex)

//       useEffect(()=>{
//         setInterval(()=>(
            
//                 console.log('RUNNINg'),
//                 scrollRef.current.scrollTo({
//                   animated: true,
//                   x: DEVICE_WIDTH * selectedIndex,
//                   y: 0
//                 })
              
//         ),1000)
//       })
//       console.log("THIS IS REF", scrollRef)

//     return (
//         <View style = {{height:'100%', width:'100%'}}>
//             <ScrollView 
//                 horizontal pagingEnabled
//                 onMomentumScrollEnd = {setIndex}
//                 ref = {scrollRef}
//                 >
//                 {images.map(image=>(
//                     <Image 
//                         key = {image}
//                         style = {styles.backgroundimage}
//                         source = {image}
//                     />
//                 ))}
//                 {/* <Image
//                     source = {require('../Assets/Images/RegisterationCarousel/carousel1.png')}
//                     style = {styles.backgroundimage}
//                 />
//                 <Image
//                     source = {require('../Assets/Images/RegisterationCarousel/carousel2.png')}
//                     style = {styles.backgroundimage}
//                 />
//                 <Image
//                     style = {styles.backgroundimage}
//                     source = {require('../Assets/Images/RegisterationCarousel/carousel3.png')}
//                 /> */}
//             </ScrollView>
//         </View>
//     )
// }

// export default BackgroundCarousel

// const styles = StyleSheet.create({
//     backgroundimage:{
//         height:'100%',
//         width:DEVICE_WIDTH
//     }
// })
import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image,Text } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      images : [
        require('../Assets/Images/RegisterationCarousel/carousel1.png'),
        require('../Assets/Images/RegisterationCarousel/carousel2.png'),
        require('../Assets/Images/RegisterationCarousel/carousel3.png',) ]  
    };
    this.scrollRef = React.createRef();
  }


  componentDidMount = () => {

    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.state.images.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 3000);
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    
    const { selectedIndex, images } = this.state;
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {images.map(image => (
            <Image
              style={styles.backgroundImage}
              source={image}
              key={image}
            />
          ))}
        </ScrollView>
        <View style = {styles.textStyle}>
            <Text style = {{color:'white'}}>
                Meet awesome people & enjoy life
            </Text>
        </View>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 1 : 0.5,
                  width: i === selectedIndex ? 25:6 }
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").width
  },
  circleDiv: {
    position: "absolute",
    bottom: '22%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff"
  },
  textStyle:{
    position: "absolute",
    bottom: '25%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // height: '100%'
  }
});

export default BackgroundCarousel ;