import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '@/constants'

export default function Categories() {
  const [activeItem, setActiveItem] = useState(null)
  return (
    <View className='mt-4'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
      >
        {
          categories.map((category, indx)=>{
            let isActive = category.id == activeItem
            let btnClass = isActive ? "bg-gray-600" : "bg-gray-200"
            let txtClass = isActive ? "font-semibold text-gray-800" : "text-gray-500"
            return(
              <View key={indx} className='flex justify-center items-center mr-6'>
                <TouchableOpacity onPress={() => setActiveItem(category.id)} className={"p-1 rounded-full shadow bg-gray-200 " + btnClass}>
                  <Image style={{width:45, height:45}} source={category.image} />
                </TouchableOpacity>
                <Text className={"text-sm "+txtClass}>{category.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}