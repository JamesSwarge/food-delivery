import { View, Text } from 'react-native'
import React from 'react'
import { featured } from '@/constants'
import { useNavigation } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

export default function Delivery() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View className='flex-1'>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className='flex-1'
        mapType='standard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
        />
     </MapView>
    </View>
  )
}