import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface PlaceRowProps {
  data: any;
}

const PlaceRow = ({data}: PlaceRowProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === 'Home' ? <Text>HM</Text> : <Text>IC</Text>}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
});

export default PlaceRow;
