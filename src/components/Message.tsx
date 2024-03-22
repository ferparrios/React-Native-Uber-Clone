import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at
        delectus odit doloribus neque fugit perferendis quasi porro? Dolor autem
        ullam unde consequatur eaque veniam excepturi voluptas rerum dicta amet.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1065e9',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }, 
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default Message;
