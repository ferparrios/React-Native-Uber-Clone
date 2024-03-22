import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';


const HomeSearch = () => {
  const navigation = useNavigation()
  const goToSearch = () => {
    navigation.navigate('DestinationSearch')
  }
  return (
    <View>
      {/* Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <Text>CI</Text>
          <Text>Now</Text>
          <Text>DA</Text>
        </View>
      </Pressable>
      {/* Previous Destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Text>IC</Text>
        </View>
        <Text style={styles.destinationText}>Spin NIghtclub</Text>
      </View>
      {/* Home destination */}
      <View style={styles.row}>
        <View style={{...styles.iconContainer, backgroundColor: '#218cff'}}>
          <Text>HI</Text>
        </View>
        <Text style={styles.destinationText}>Spin NIghtclub</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#d9d9d9',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#535353',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 70,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb'
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16
  }
});

export default HomeSearch;
