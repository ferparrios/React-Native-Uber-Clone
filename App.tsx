import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {PermissionsAndroid, StatusBar, Platform} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACESS_FINE_LOCATION,
        {
          title: 'App needs Location Permission',
          message:
            'We need permission to your location ' +
            'For the tranking service.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />

      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
