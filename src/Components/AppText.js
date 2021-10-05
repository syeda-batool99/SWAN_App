import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import { PRIMARY, SECONDARY } from '../constants/Colors';
const AppText = props => {
  const {
    children,
    bold,
    lineHeight,
    italic,upperCase,lowerCase,
    underline,
    size,
    heading,
    subHeading,
    color,
    textStyle,
    textContainerStyle,
    white,
    center,
    button,
    alertText,
    width,
    marginTop,
    subtitle,
    semiBoldItalic,
  } = props;
  return (
    <View
      style={[styles.commonTextContainerStyles, textContainerStyle]}>
      <Text
        style={[
          styles.commonTextStyles,
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
          marginTop && {marginTop: marginTop},
          width && {width: width},
          // (boldFont||heading) && {fontFamily: 'Oswald-Bold'},
          textStyle,
          center && {textAlign:'center'},
          button && {fontFamily:'SharpGrotesk-Medium20'},
          alertText && {fontFamily:'SharpGrotesk-Book20'},
          subtitle && {fontFamily:'SharpGrotesk-SemiBold20'},
          semiBoldItalic && {fontFamily:'SharpGrotesk-SemiBoldItalic20'},
          lineHeight && {lineHeight:lineHeight}
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
    // lineHeight:27,
    // color: 'white',
    fontFamily: 'SharpGrotesk-Book20',
  },
});
export default AppText;
