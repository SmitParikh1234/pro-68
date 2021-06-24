import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View>
          <AppHeader/>

          <Text style={{flex:1,color:"purple", 
          fontWeight:'bold',
          fontSize:30,
          marginTop:190, 
          marginLeft:100,
         justifyContent: 'center', 
          alignItems: 'center'}}>Instagram</Text>
        </View>
      );
    }
  }