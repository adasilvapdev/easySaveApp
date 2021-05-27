import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function WelcomeScreen() {
    return (
        <View style={styles.containerView}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#7f72fe'
    },
    logo: {
        marginTop: '5%',
        width: 150,
        height: 58,
        alignSelf: 'center',
    }
})
