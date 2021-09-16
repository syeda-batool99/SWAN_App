import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackgroundCarousel from './../../Components/BackgroundCarousel';
import { BLUE,WHITE } from './../../Assets/Colors/index';

const WelcomeScreen = () => {

    return (
        <View style = {styles.container}>
            <BackgroundCarousel />
            <View style={{ backgroundColor:'white', height:178, position:'absolute', bottom:0, width:400, borderTopLeftRadius:32, borderTopRightRadius:32, paddingHorizontal:35, paddingVertical: 30}}>
            <View style = {{width:'70%'}}>
                <Text style={{fontSize: 22, }}>Welcome on Swan App Sign in or Join now</Text>
            </View>

            {/* btn boxes */}
            <View style = {styles.btnContainer}>
                <TouchableOpacity style = {[{ borderWidth:2},styles.btn]}>
                    <View>
                        <Text>Sign in</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  style = {[{backgroundColor:BLUE, borderWidth:0},styles.btn]}>
                    <View>
                    <Text style = {{color:WHITE}} >Join Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <View style={{width:324, height:80, backgroundColor:'white', marginVertical: 10, borderRadius: 12, flexDirection:'row', justifyContent:'space-between', padding:10}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Image source={require('../../Assets/Images/Progress_Pie/Jungle_Book.png')}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={{marginLeft: 10, marginTop:5, fontSize: 14, color:'#272D37'}}>The Jungle Book (1984)</Text>
                    <Text style={{marginLeft: 10, marginTop:10, fontSize: 12, color:'#8F9CA9'}}>Rudyard Kipling</Text>
                    </View>
                </View>
                <View>
                <Progress.Circle size={50} indeterminate={false} progress={0.70} color={'#563AD7'} unfilledColor={'#D3D3D3'} borderColor={'white'} showsText={true} formatText={()=> <Text>75%</Text>} />
                </View>
            </View> */}
            
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    btn:{
        height:50,
        width:'45%',
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-between'

    }
})
