import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { themeColors } from '@/constants/Colors'
import { useNavigation } from 'expo-router'

export default function RestaurantCard({item}) {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
      onPress={()=> navigation.navigate('Restaurant', {...item})}
    >
      <View style={{
        shadowColor: themeColors.bgColor(0.35),
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5
      }} className='mr-6 bg-white rounded-3xl shadow-lg'>
        <Image source={item.image} className='h-36 w-64 rounded-t-3xl' />
        <View className='px-3 pb-4 space-y-2'>
          <Text className='text-lg font-bold pt-2'>{item.name}</Text>
          <View className='flex-row items-center space-x-3'>
            <Image className='h-4 w-4' source={require("../assets/images/full-star.png")} />
            <Text className='text-xm ml-1'>
              <Text className='text-green-700'>{item.stars}</Text>
              <Text className='text-gray-700'>({item.reviews} reviews) .  
                <Text className='font-semibold pl-1'>{` ${item.category}`}</Text>
              </Text>
            </Text>
          </View>
          <View className='flex-row items-center space-x-1 mt-1'>
            <Icon.MapPin color={'gray'} width={15} height={15} />
            <Text className='text-gray-700 text-sm ml-1'>{`Nearby - ${item.address}`}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}