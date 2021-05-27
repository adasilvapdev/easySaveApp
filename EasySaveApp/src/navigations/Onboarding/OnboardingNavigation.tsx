import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { WelcomeScreen } from '../../screens/onboarding'

export default function OnboardingNavigation() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="WelcomeScreen"
        // screenOptions={{
        //     headerStyle: {
        //         elevation: 0,
        //         shadowOpacity: 0,
        //     },
        //     headerTitleStyle: {
        //         color: COLORS.DEFAULT.PRIMARY,
        //         fontSize: TYPOGRAPHY.TI,
        //     },
        //     headerBackTitleVisible: false,
        // }}
        >
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}