import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import { PRIMARY, SECONDARY } from '../constants/Colors';
const AppText = props => {
  const {
    children,
    bold,
    italic,upperCase,lowerCase,
    underline,
    size,
    heading,
    subHeading,
    color,
    textStyle,
    textContainerStyle,
    onPress,
    boldFont,
    fontFamily,
    primary,
    secondary,
    white,
    center,
    button,
    alertText,
  } = props;
  return (
    <View
      style={[styles.commonTextContainerStyles, textContainerStyle]}>
      <Text
        style={[
          styles.commonTextStyles,
          primary&&{color:PRIMARY},
          secondary&&{color:SECONDARY},
          white&&{color:"white"},
          bold && {fontWeight: 'bold'},
          upperCase && {textTransform:'uppercase'},
          lowerCase && {textTransform:'lowercase'},
          italic && {fontStyle: 'italic'},
          underline && {textDecorationLine: 'underline'},
          heading && {fontFamily:'SharpGrotesk-SemiBold20', fontSize:22},
          subHeading && {fontSize: 16},
          size && {fontSize: size},
          color && {color: color},
          // (boldFont||heading) && {fontFamily: 'Oswald-Bold'},
          textStyle,
          center && {textAlign:'center'},
          button && {fontFamily:'SharpGrotesk-Medium20', fontSize:15},
          alertText && {fontFamily:'SharpGrotesk-Book20', fontSize:14}
        ]}>
        {children}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  commonTextContainerStyles: {},
  commonTextStyles: {
    fontSize: 15,
    // color: 'white',
    fontFamily: 'SharpGrotesk-Book20',
  },
});
export default AppText;
