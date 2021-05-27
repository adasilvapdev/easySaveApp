import React from 'react'
import { MenuProvider } from 'react-native-popup-menu'
import { Navigation } from './src/navigations'
import {
  Text,
  View,
} from 'react-native'

const App = () => {
  return (
    <MenuProvider>
      <Navigation />
    </MenuProvider>
  )
}

export default App
