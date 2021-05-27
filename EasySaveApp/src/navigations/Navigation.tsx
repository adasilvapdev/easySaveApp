import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { OnboardingNavigation } from './Onboarding'

export default function Navigation() {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    headerBackTitleVisible: true,
                }}
            >
                <Stack.Screen
                    name="OnboardingNavigation"
                    component={OnboardingNavigation}
                // options={{ title: 'Auth Navigation Title' }}
                />
                {/* <Stack.Screen
                    name="MainNavigation"
                    component={MainNavigation}
                    options={{ title: 'Main Navigation Title' }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
