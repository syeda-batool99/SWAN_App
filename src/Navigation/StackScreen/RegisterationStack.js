import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import WelcomeScreen from './../../Screens/Registeration/index';

import FindContact from './../../Screens/Registeration/FindContact';
import FacebookFriendList from './../../Screens/Registeration/FacebookFriendList';
import PhoneContactList from './../../Screens/Registeration/PhoneContactList';
import FindFacebookContact from './../../Screens/Registeration/FindFacebookContact';

import PhoneNumber from '../../Screens/Registeration/PhoneNumber';
import VerifyCode from '../../Screens/Registeration/VerifyCode';
import Permission from '../../Screens/Registeration/Permission';
import AddProfilePhoto from '../../Screens/Registeration/AddProfilePhoto';
import ForgotPassword from './../../Screens/Registeration/ForgotPassword';
import Verification from './../../Screens/Registeration/Verification';

import  InputBio from '../../Screens/Registeration/InputBio';
import Gender from '../../Screens/Registeration/Gender';
import Username from '../../Screens/Registeration/Username';
import Password from '../../Screens/Registeration/Password';
import DateofBirth from '../../Screens/Registeration/DateofBirth';
import NewPassword from '../../Screens/Registeration/NewPassword';

const RegisterationStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

        <Stack.Screen name="FindContactScreen" component={FindContact} />
        <Stack.Screen name="FindFacebookFriendScreen" component={FindFacebookContact} />
        <Stack.Screen name="FacebookFriendListScreen" component={FacebookFriendList} />
        <Stack.Screen name="ContactListScreen" component={PhoneContactList} />
        <Stack.Screen name="PermissionScreen" component={Permission} />
        <Stack.Screen name="AddProfilePhotoScreen" component={AddProfilePhoto} />
        <Stack.Screen name="ForgotpasswordScreen" component={ForgotPassword} />
        <Stack.Screen name="VerificationScreen" component={Verification} />



        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="InputBio" component={InputBio} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Username" component={Username} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="DateofBirth" component={DateofBirth} />
        <Stack.Screen name="NewPassword" component={NewPassword} />

    </Stack.Navigator>
    )
}

export default RegisterationStack
