import React ,{useRef,useEffect,useState}from 'react'
import { ScrollView, StyleSheet, Image, View,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { DARK_PEACH,TEXT_GREY, PEACH,PURPLE } from '../../Assets/Colors'
import AppText from '../../Components/AppText'
import AppButton from '../../Components/AppButton';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet'
import SearchBar from './../../Components/SearchBar';
import { RadioButton } from 'react-native-paper';
import { BLUE } from './../../Assets/Colors/index';

const OpenRoom = ({navigation}) => {
    const refRBSheet = useRef();
    const refRBSheet2 = useRef();

    const [isPing,setIsPing] = useState(false)
    const [isRaiseHand,setIsRaisedHand] = useState(false)
    const [search,setSearch] = useState('')

    console.log(isPing)

    const PodcastHeader = ()=>{
        return(
            <View style = {styles.headerContainer}>
                <View style = {styles.leftComponent}>
                    <View style = {{paddingTop:5, paddingHorizontal:10}}>
                        <Icon onPress = {()=>navigation.goBack()} name = "down" type = "antdesign"  />
                    </View>
                    <View>
                        <AppText size = {20} >Hallway</AppText>
                    </View>
                </View>
                <View style = {styles.RightComponent}>
                    <View style = {{padding:5}}>
                        <Icon name = "search1" type = "antdesign" />
                    </View>
                    <View style = {{padding:5}}>
                        <Icon name = "bell" type = "feather" />
                    </View>
                </View>
            </View>
        )
    }

    const Person=({unmute, speakers})=>{
        const [isSelected,setIsSelected] = useState(false)
        return(
            <TouchableOpacity onPress = {()=>{setIsSelected(!isSelected)}}>
            <View style = {{ width:65, alignSelf:'center'}}>
                <Image style = {{height:50, width:50, alignSelf:'center'}} source = {require('../../Assets/Images/RegisterationCarousel/avatar.png')} />
            </View>
            {isSelected?(
                <View style = {{ width:65, alignSelf:'center', position:'absolute'}}>
                    <Image style = {{height:50, width:50, alignSelf:'center'}} source = {require('../../Assets/Images/Icons/tintSelected.png')} />
                </View>
            ):(null)}


            <View style ={{alignSelf:'center', marginVertical:5}}>
                {speakers?(
                <AppText center bold>Scott Baker</AppText>
                ):(
                <AppText center bold>Baker</AppText>
                )}
            </View>
        </TouchableOpacity>
        )
    }

    const PingSheet = ()=>{
        return(
            <View style = {{alignSelf:'center', alignItems:'center',width:'90%'}}>
                <AppText lineHeight = {25} textContainerStyle = {{width:'60%'}}  center size = {18} heading>Ping Someone Into The Room</AppText>
                <View style = {{marginVertical:10, width:'90%'}}>
                    <SearchBar placeholder ='Search Here' search = {search} setSearch = {()=>setSearch} noMic/>
                </View>
                <View style = {{flexDirection:'row',flexWrap:'wrap', width:'90%', alignSelf:'center'}}>
                    <Person />
                    <Person />
                    <Person />
                </View>
                <View style = {{flexDirection:'row', justifyContent:'space-evenly', marginVertical:15,width:'100%'}}>
                    <View style = {{backgroundColor:PURPLE, borderRadius:14,height:50, width:250}}>
                        <AppButton button white label="Share" />
                    </View>
                    <View style = {{height:50, borderRadius:14, backgroundColor:'#F7EFEB', width:50}}>
                        <AppButton iconName = "copy" iconType = "feather" iconColor = "grey" icon/>
                    </View>
                </View>

            </View>
        )
    }

    const RaisedHand = ()=>{
        const [value, setValue] = React.useState('first');
        return(
            <View style = {{alignSelf:'center', alignItems:'center', width:'90%'}}>
                <AppText heading size = {18}>Raised Hands</AppText>
                <View style = {{ width:'100%', marginVertical:15}}>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style = {{paddingTop:5}}>
                                <AppText>Off</AppText>
                            </View>
                            <RadioButton color = {BLUE} value="first" />
                        </View>
                        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style = {{paddingTop:5}}>
                                <AppText>Limited to Follow by The Speakers</AppText>
                            </View>
                            
                            <RadioButton color = {BLUE} value="second" />
                        </View>
                        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style = {{paddingTop:5}}>
                                <AppText>Open to Everyone</AppText>
                            </View>
                            
                            <RadioButton color = {BLUE} value="third" />
                        </View>
                    </RadioButton.Group>
                </View>
            </View>
        )
    }

    return (
        <View style= {styles.container}>
            <PodcastHeader/>
            <View style = {styles.mainContainer}>
                <ScrollView contentContainerStyle = {{width:'90%', alignSelf:'center', paddingVertical:15}}>
                    <View style = {{width:'100%',paddingBottom:20}}>
                        <AppText color = {TEXT_GREY}>UX UI Designer Club 🌈</AppText>
                        <AppText button>What A UX Designer Does Every Day💫🔮</AppText>
                    </View>

                    <View>
                        <View style = {styles.imgContainer}>
                            <Image style = {{height:70, width:70}} source = {require('../../Assets/Images/RegisterationCarousel/avatar.png')} />
                            <View style = {{ position:'absolute', bottom:-10, right:-10}}>
                                <Image source = {require('../../Assets/Images/Icons/mute.png')} />
                            </View>
                        </View>
                        <View style ={{alignSelf:'center', marginVertical:10}}>
                            <AppText bold>Scott Baker</AppText>
                        </View>
                    </View>

                </ScrollView>


                <View style = {styles.btmContainer}>
                    <View>
                        <View style = {{height:60,width:150, borderRadius:15,backgroundColor:'white'}}>
                            <AppButton label = "Leave Quietly" textColor = "red" />
                        </View>
                    </View>
                    <View style = {{flexDirection:'row', justifyContent:'space-evenly', marginVertical:5,paddingVertical:5, width:110}}>
                        <TouchableOpacity onPress = {()=>refRBSheet.current.open()} style = {styles.iconStyle}>
                            <Icon color = "white" name = 'plus' type = 'antdesign' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=>{refRBSheet2.current.open()}} style = {styles.iconStyle}>
                            <Ionicons color = "white" name = 'hand-left' size = {20}/>
                        </TouchableOpacity>
                        <View style = {styles.iconStyle}>
                            <Ionicons color = "white" name = 'mic-off-sharp' size = {20}/>
                        </View>
                    </View>
                </View>

                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    // onClose = {setOpenSheet}
                    customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.1)",
                    },
                    draggableIcon: {
                        backgroundColor: '#DBD4D1'
                    },
                    container:{
                        backgroundColor:PEACH,
                        borderTopRightRadius:30,
                        borderTopLeftRadius:30,
                        alignItems:'center',
                        height:300
                    }
                    }}>
                        <PingSheet />
                 </RBSheet>

                 <RBSheet
                    ref={refRBSheet2}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    // onClose = {setOpenSheet}
                    customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.1)",
                    },
                    draggableIcon: {
                        backgroundColor: '#DBD4D1'
                    },
                    container:{
                        backgroundColor:PEACH,
                        borderTopRightRadius:30,
                        borderTopLeftRadius:30,
                        alignItems:'center',
                        height:200,
                    }
                    }}>
                        <RaisedHand />
                 </RBSheet>


            </View>
        </View>
    )
}

export default OpenRoom

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:DARK_PEACH
    },
    headerContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        marginTop:10
    },
    leftComponent:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    RightComponent:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    mainContainer:{
        backgroundColor:PEACH,
        flex:1,
        marginTop:5,
    },
    imgContainer:{
        borderWidth:2,
        borderRadius:20,
        padding:5,
        alignSelf:'center',
        borderColor:PURPLE
    },
    btmContainer:{
        paddingVertical:25,
        paddingHorizontal:25,
        backgroundColor:DARK_PEACH,
        flexDirection:'row',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        justifyContent:'space-between'
    },
    iconStyle:{
        backgroundColor:PURPLE,
        borderRadius:100,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:15        // padding:5
    }
})
