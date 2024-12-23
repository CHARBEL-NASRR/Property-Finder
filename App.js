import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Menu from './screens/Menu'; // Adjust the path if necessary
import WhitePage from './screens/WhitePage';
import DetailProduk from './screens/DetailProduk';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen
                    name="WhitePage"
                    component={WhitePage}
                    options={{ headerShown: true }}
                   
                /> 
                  <Stack.Screen name="DetailProduk" component={DetailProduk} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;