import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import HomeMap from '../components/HomeMap'
import Message from '../components/Message'
import HomeSearch from '../components/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
      
      <View style={{height: Dimensions.get('window').height - 400}}>
      <HomeMap />
      </View>
      {/* Message */}
      <Message />
      {/* Bottom Component */}
      <HomeSearch />
    </View>
  )
}



export default HomeScreen