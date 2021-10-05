import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({search,setSearch,onFocus, placeholder,noMic}) => {
    return (
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
          onFocus = {onFocus}
          onBlur = {()=>console.log('BLURf')}
          onChangeText={search => setSearch(search)}
          style={{
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 12,
            fontSize: 14,
            color:'black'
          }}
          placeholder={placeholder?(placeholder):("what are you looking for")}
          placeholderTextColor="#8F9CA9"
        />
        {noMic?(null):(
              <MaterialCommunityIcons
              name="microphone"
              size={25}
              style={{paddingVertical: 10, paddingRight: 20, color: '#8F9CA9'}}
            />
        )}
      </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})
