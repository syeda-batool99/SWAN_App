import React from 'react'
import { FlatList,Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WHITE,TEXT_GREY } from '../Assets/Colors'
import AppText from './AppText'

const ContactListComponent = (props) => {
    const LIST = [
        {
          avatar: require('../Assets/Images/RegisterationCarousel/avatar.png'),
          f_name: 'Steve',
          l_name: 'Jones',
          link: '@stevejones',
        },
        {
          avatar: require('../Assets/Images/RegisterationCarousel/avatar.png'),
          f_name: 'Steve',
          l_name: 'Jones',
          pressed: true,
          link: '@stevejones',
        },
        {
          avatar: require('../Assets/Images/RegisterationCarousel/avatar.png'),
          f_name: 'Steve',
          l_name: 'Jones',
          link: '@stevejones',
        },
      ]

    const renderItem = ({item})=>{
        return(
            <View
                style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 10,
                backgroundColor: WHITE,
                width: '100%',
                alignSelf: 'center',
                padding: 10,
                paddingTop: 15,
                margin: 3,
                }}>
                    <View style={[{flexDirection: 'row'},props?.group&&{ width:'100%', justifyContent:'space-between'}]}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginRight: 10}}>
                                <Image source={require('../Assets/Images/RegisterationCarousel/avatar.png')} />
                            </View>
                            <View>
                                <AppText button color={'black'} size={14}>
                                {item.f_name} {item.l_name}
                                </AppText>
                                <AppText color={TEXT_GREY} size={12}>
                                {item.link}
                                </AppText>
                            </View>
                        </View>
                        {props?.group?(
                            <View style = {{paddingVertical:10,paddingHorizontal:10}}>
                                
                                 <Image source = {require('../Assets/Images/Home/selectTick.png')} />{/*
                                // ):(
                                // <Image source = {require('../Assets/Images/Home/selectTick.png')} />
                                // )}} */}
                            </View>
                        ):(null)}

                    </View>
      </View>
        )
    }
    return (
        <SafeAreaView>
            <AppText button >{props.char}</AppText>
        <FlatList 
            keyExtractor = {(item,index)=>index.toString()}
            data = {LIST}
            renderItem = {renderItem}
        />
        </SafeAreaView>
    )
}

export default ContactListComponent

const styles = StyleSheet.create({})
