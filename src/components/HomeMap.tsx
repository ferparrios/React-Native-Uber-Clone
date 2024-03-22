import React from 'react';
import {Image, Text, View} from 'react-native';
import MapView, {
  PROVIDER_DEFAULT,
  Marker,
} from 'react-native-maps';
import cars from '../assets/data/cars';

const HomeMap = () => {
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_DEFAULT}
      showsUserLocation={true}
      initialRegion={{
        latitude: -12.046374,
        longitude: -77.042793,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{
            latitude: car.latitude,
            longitude: car.longitude,
          }}>
          <Image
            source={{uri: car.image}}
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
