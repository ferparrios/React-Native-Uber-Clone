import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import VehicleTypes from '../components/VehicleTypes';
import RouteMap from '../components/RouteMap';
import {useRoute} from '@react-navigation/native';

const SearchResults = () => {
  const route = useRoute();
  // console.log(JSON.stringify(route.params.data, null, 2));
  const {originPlace, destinationPlace} = route.params
  
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap originPlace={originPlace} destinationPlace={destinationPlace} />
      </View>
      <View style={{height: 400}}>
        <VehicleTypes />
      </View>
    </View>
  );
};

export default SearchResults;
