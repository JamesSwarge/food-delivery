import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '@/constants/Colors'
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View>
      <View className='flex-row justify-between items-center px-4'>
        <View className=''>
          <Text className='font-bold text-lg'>{title}</Text>
          <Text className='text-gray-500 text-sm'>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColors.primarydark}} className='font-semibold text-lg'>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal:15
        }}
        className="overflow-visible pt-3 pb-5"
      >
        {
          restaurants.map((restaurant, index)=>{
            return(
              <RestaurantCard key={index} item={restaurant} />
            )
          })
        }
      </ScrollView>
    </View>
  )
}