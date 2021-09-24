import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { PEACH, TEXT_BLACK, WHITE } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import AppText from '../../Components/AppText'
import { RadioButton } from 'react-native-paper';
import AppButton from '../../Components/AppButton'
import { PURPLE } from './../../Assets/Colors/index';

const GenerateTitle = () => {
    const [checked, setChecked] = useState('first');
    return (
        <View style = {{backgroundColor:PEACH, height:'100%', width:'100%'}}>
                <AppHeader title = "Generate Title" />
                <KeyboardAwareScrollView style = {{ width:'90%',  alignSelf:'center'}}>
                    <View >
                        <AppText>Product/Brand name/Blog (optional)</AppText>
                    </View>

                    <View style ={{marginVertical:10}}>
                        <TextInput placeholder = 'e.g. How to use AI for your blog' style = {styles.optionalTextinput}/>
                    </View>


                    <View style ={{marginVertical:10}}>
                        <AppText>e.g. Break through writers block</AppText>
                    </View>

                    <View style ={{marginVertical:10}}>
                        <TextInput placeholder = 'e.g. Break through writers block' multiline={true} numberOfLines={10} style = {[styles.optionalTextinput,{textAlignVertical: 'top'}]}/>
                    </View>

                        <View style={{flexDirection: 'row', marginVertical:15}}>
                            <View>
                            <RadioButton
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')} />
                            </View>
                            <View style={{width: '100%'}}>
                                <AppText button size={16} color={TEXT_BLACK} > Need help targeting a more specific audience? </AppText>
                            </View>
                    
                        </View>



                    <View >
                        <AppText>Target audience</AppText>
                    </View>

                    <View style ={{marginVertical:10}}>
                        <TextInput placeholder = 'e.g. Black Friday' style = {styles.optionalTextinput}/>
                    </View>

                    <View >
                        <AppText>Occasion</AppText>
                    </View>

                    <View style ={{marginVertical:10}}>
                        <TextInput placeholder = 'e.g. 15% off' style = {styles.optionalTextinput}/>
                    </View>
                    
                </KeyboardAwareScrollView>

                <View style={{ width:'90%', alignSelf:'center', flex:1 }}>

                    <View style = {{height:50}}>
                        <AppButton buttonContainerStyle = {{backgroundColor:PURPLE}} white button borderRadius={20} label = "Generate"/>
                    </View>

                </View>

        </View>
    )
}

export default GenerateTitle

const styles = StyleSheet.create({
    optionalTextinput:{
        backgroundColor:WHITE,
        borderRadius:20,
        padding:10,
        
    },
    ItemContainer: {
        flexDirection: 'column',
        // justifyContent: 'space-between',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        paddingLeft: 10,
        margin: 3,
      },
})
