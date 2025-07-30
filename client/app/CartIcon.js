import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '@/constants/Colors'
import { useNavigation } from 'expo-router'

export default function CartIcon() {
  const navigation = useNavigation()
  return (
    <View className='absolute bottom-5 w-full z-50'>
      <TouchableOpacity
        onPress={()=> navigation.navigate("CartScreen")}
        style={{backgroundColor: themeColors.bgColor(1)}}
        className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg'
      >
        <View className='p-2 px-4 rounded-full' style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <Text className='font-extrabold text-white text-lg'>3</Text>
        </View>
        <Text className='font-extrabold text-white text-lg flex-1 text-center'>View Cart</Text>
        <Text className='font-extrabold text-white text-lg'>${23}</Text>
      </TouchableOpacity>
    </View>
  )
}