import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '@/constants'
import { useNavigation } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '@/constants/Colors';
import * as Icon from 'react-native-feather'

export default function Delivery() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1'>
      {/* <Text className='text-3xl font-bold'>Delivery</Text> */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className='flex-1'
        style={{ flex: 1 }}
        mapType='standard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className='rounded-t-3xl -mt-12 bg-white relative'>
          <View className='flex-row justify-between px-6 pt-6 pb-2'>
            <View className='ml-4'>
              <Text className='text-lg text-gray-700 font-semibold'>
                Estimated Arrival
              </Text>
              <Text className='text-3xl font-extrabold text-gray-700'>
                20-30 mins
              </Text>
              <Text className='mt-1 text-gray-700 font-semibold'>
                Your Order is on its way..!
              </Text>
            </View>
            <Image className='h-16 w-16 mr-10' source={require("@/assets/images/delivery-girl.png")} />
          </View>

          <View className='flex-row justify-between items-center rounded-full p-2 mt-2 mb-5 mx-5' style={{backgroundColor: themeColors.bgColor(0.7)}}>
            <View className='p-1 rounded-full' style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
              <Image className='h-16 w-16 rounded-full' source={require("@/assets/images/delivery-profile-2.jpg")} />
            </View>
            <View className='flex-1 ml-3'>
              <Text className='text-lg font-bold text-white'>James</Text>
              <Text className='font-semibold text-white'>Your Rider</Text>
            </View>
            <View className='flex-row items-center space-x-3 gap-3 mr-3'>
              <TouchableOpacity className='bg-white p-2 rounded-full'>
                <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor} strokeWidth={1} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("index")} className='bg-white p-2 rounded-full'>
                <Icon.X stroke={'red'} strokeWidth={4} />
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </SafeAreaView>
  )
}