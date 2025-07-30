// app/restaurant.js
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather'
import { useRoute } from '@react-navigation/native';
import { themeColors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import Dishrow from './Dishrow';
import CartIcon from './CartIcon';
import { StatusBar } from 'expo-status-bar';

export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation()
  let item = params
  // console.log("restaurant :-", item);
  
  return (
    <View>
      <CartIcon />
      <StatusBar style='light' />
      <ScrollView>
        <View className='relative'>
          <Image className='w-full h-72' source={item.image} />
          <TouchableOpacity onPress={()=> navigation.goBack()} className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View style={{borderTopLeftRadius:40, borderTopRightRadius:40}} className='bg-white -mt-12 pt-6'>
          <View className='px-5 pt-1 pb-5'>
            <Text className='text-3xl font-bold'>{` ${item.name}`}</Text>
            <View className='flex-col space-x-2'>
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
            <Text className='text-gray-500 mt-2'>{item.description}</Text>
          </View>
        </View>

        <View className='pb-24 bg-white'>
          <Text className='px-4 pb-4 text-2xl font-bold'>Menu</Text>
          {/* All dishes */}
          {
            item.dishes.map((dish, index) => {
              return(
                <Dishrow item={{...dish}} key={index} />
              )
            })
          }
        </View>

      </ScrollView>
    </View>
  );
}
