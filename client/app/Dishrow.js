import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '@/constants/Colors'
import * as Icon from 'react-native-feather'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartItemsByID } from '@/slices/cartSlice'

export default function Dishrow({item}) {
  const dispatch = useDispatch();
  const totalItems = useSelector(state=> selectCartItemsByID(state, item.id))
  const addItem = () => {
    dispatch(addToCart({...item}))
    console.log("items =", item);    
  }
  const removeItem = () => {
    dispatch(removeFromCart({id: item.id}))
  }

  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image source={item.image} className='rounded-3xl' style={{height:100, width:100}} />
      <View className='flex flex-1 space-y-3'>
        <View className='pl-3'>
          <Text className='text-xl'>{item.name}</Text>
          <Text className='text-gray-700'>{item.description}</Text>
        </View>
        <View className='flex-row justify-between mt-2 pl-3 items-center'>
          <Text className='text-gray-700 text-lg font-bold'>${item.price}</Text>
          <View className='flex-row items-center'>
            <TouchableOpacity onPress={removeItem} disabled={!totalItems.length} style={{backgroundColor: themeColors.bgColor(1)}} className='p-1 rounded-full'>
              <Icon.Minus strokeWidth={2} stroke={'white'} height={20} width={20} />
            </TouchableOpacity>
            <Text className='px-2'>{totalItems.length}</Text>
            <TouchableOpacity onPress={addItem} style={{backgroundColor: themeColors.bgColor(1)}} className='p-1 rounded-full'>
              <Icon.Plus strokeWidth={2} stroke={'white'} height={20} width={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}