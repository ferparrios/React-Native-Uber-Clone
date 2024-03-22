import React from 'react';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_KEY} from '@env'

interface RouteMapProps {
  originPlace: any
  destinationPlace: any
}

const RouteMap = ({originPlace, destinationPlace}: RouteMapProps) => {
  const GOOGLE_MAPS_APIKEY = GOOGLE_KEY;

  console.log('Origin Place: ', originPlace)
  console.log('Destination Place: ', destinationPlace)
  const origin = {
    latitude: originPlace.details.geometry.location.lat,
    longitude: originPlace.details.geometry.location.lng,
  };

  const destination = {
    latitude: destinationPlace.details.geometry.location.lat,
    longitude: destinationPlace.details.geometry.location.lng,
  };
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_DEFAULT}
      initialRegion={{
        latitude: -12.046374,
        longitude: -77.042793,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
      />
      <Marker coordinate={origin} title="Origin" />
      <Marker coordinate={destination} title="Destination" />
    </MapView>
  );
};

export default RouteMap;
