import * as React from 'react';
import {LogBox} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants from './src/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from './src/Components/MovieDetails';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  ])

  //PropTypes işlevlerini typescript ile yazmamızı öneriyor çünkü yakın zamanda kaldırılacakmış tamamen.

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: {backgroundColor: Constants.baseColor},
  headerTitleStyle: {color: Constants.textColor},
  headerLeft: () => <Icon name="menu" size={34} color={Constants.textColor} />,
  headerRight: () => (
    <Icon name="search" size={25} color={Constants.textColor} />
  ),
};

export default App;