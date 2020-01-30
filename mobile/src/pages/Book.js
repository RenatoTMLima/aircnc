import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Book({navigation}){
   const id = navigation.getParam(id);

   useEffect(() => {
      console.log(id);
   }, [])
   
   return (
      <View>
         <Text>{id}</Text>
      </View>
   )
}