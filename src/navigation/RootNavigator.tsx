import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
