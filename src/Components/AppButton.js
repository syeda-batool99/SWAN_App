import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';


import AppText from './AppText';

const AppButton = props => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    onPress,
    borderRadius,
    label,
    iconName,
    iconType,
    heading,
    subHeading,
    iconColor,
    white,
    boldFont,
    fontSize,
    textColor,
    icon,
    buttonContainerStyle,
    iconSize,
    iconContainerStyle,
    button,
    disabled,
    textStyle
  } = props;
  return (
    <>
      <TouchableOpacity
        disabled = {disabled}
        onPress={onPress}
        style={[
          styles.buttonContainerStyle,
          borderRadius && {borderRadius: borderRadius},
          buttonContainerStyle,
        ]}>
        <AppText
          onPress={onPress}
          heading={heading}
          subHeading={subHeading}
          size={fontSize}
          boldFont={boldFont}
          color={textColor}
          white={white}
          button = {button}
          textStyle = {textStyle}
          >
          {label}
        </AppText>

        {icon && (
          <View style={[styles.iconContainer, iconContainerStyle]}>
            <Icon
              iconStyle={iconSize && {fontSize: iconSize}}
              color={iconColor || 'white'}
              name={iconName || 'eye-with-line'}
              type={iconType || 'entypo'}
              onPress={onPress}
            />
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  buttonContainerStyle: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    // right: wp(7),
    // bottom: hp(3),
  },
});

export default AppButton;
