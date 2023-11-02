import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import DiscoverMovies from './Components/DiscoverMovies';
import Styles from './Styles';
import TrendingPeople from './Components/TrendingPeople';
import TrendingMovies from './Components/TrendingMovies';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = props => {
  return (
    <ScrollView >
    <View style={[Styles.sectionBg,{height:height} ]}>
      <DiscoverMovies navigation={props.navigation} />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
    </View>
    </ScrollView>
  );
};

export default Home;