import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import PlaceRow from '../components/PlaceRow';
import { useNavigation } from '@react-navigation/native';
import {GOOGLE_KEY} from '@env'


const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation()  

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace: originPlace,
        destinationPlace: destinationPlace
      })
    }
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            // 'details' is provided when fetchDetails = true
            console.log(data, JSON.stringify(details, null, 2));
          }}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current Location"
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: GOOGLE_KEY,
            language: 'en',
          }}
          renderRow={(data: GooglePlaceData) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            // 'details' is provided when fetchDetails = true
            console.log(data, JSON.stringify(details, null, 2));
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {...styles.autoCompleteContainer, top: 55},
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: GOOGLE_KEY,
            language: 'en',
          }}
          renderRow={(data: GooglePlaceData) => <PlaceRow data={data} />}
        />

        {/* Circle near origin input */}
        <View style={styles.circle}></View>
        {/* Line between dots */}
        <View style={styles.line}></View>
        {/* Circle near destination input */}
        <View style={styles.square}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 6,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#919191',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});

export default DestinationSearch;
