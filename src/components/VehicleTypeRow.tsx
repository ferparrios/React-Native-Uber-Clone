import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TypeProps {
  type: any
}

const VehicleTypeRow = ({type}: TypeProps) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Text>Image</Text>
      <View style={styles.middleContainer}>
        <Text style={styles.type}>{type.type} <Text>P</Text> 3</Text>
        <Text style={styles.time}>8:830PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>Ic</Text>
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain'
  },

  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  time:{
    color: '#5d5d5d'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5
  }
})

export default VehicleTypeRow