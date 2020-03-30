import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const appStack = createStackNavigator();

import incidents from './pages/incidents';
import details from './pages/details';

export default function routes(){
    return(
        <NavigationContainer>
            <appStack.Navigator screenOptions={{headerShown: false}}>
                <appStack.Screen name="Incidents" component={incidents}></appStack.Screen>
                <appStack.Screen name="Details" component={details}></appStack.Screen>

            </appStack.Navigator>

        </NavigationContainer>
    );
}