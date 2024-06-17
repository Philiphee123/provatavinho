import { Image, StyleSheet, Platform } from 'react-native';


import Home from '../../components/home'

export default function HomeScreen() {
 return(
  <view style={style.container}>
    <Home />

  </view>
 );
}



const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
