import React from 'react';
import {Pressable, Text, View} from 'react-native';
import VehicleTypeRow from './VehicleTypeRow';
import typesData from '../assets/data/types.js';

const VehicleTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map(type => (
        <VehicleTypeRow type={type} key={type.id} />
      ))}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default VehicleTypes;
