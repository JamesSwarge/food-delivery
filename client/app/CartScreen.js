import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { featured } from '@/constants'
import { useNavigation } from 'expo-router';
import { themeColors } from '@/constants/Colors';
import * as Icon from 'react-native-feather'

export default function CartScreen() {

  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    // ✅ CHANGE: Wrap everything in SafeAreaView and ensure full screen
    <SafeAreaView className='flex-1 bg-white'> 

      {/* ✅ MOVE ONLY HEADER STUFF HERE */}
      <View className='relative py-5 shadow-sm bg-white'>
        <TouchableOpacity
          onPress={()=> navigation.goBack()}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
        </TouchableOpacity>
        <View className='mb-4'>
          <Text className='text-center font-bold text-xl'>Your Cart</Text>
          <Text className='text-center text-gray-500'>{restaurant.name}</Text>
        </View>

        <View style={{backgroundColor: themeColors.bgColor(0.2)}} className='flex-row px-4 justify-center items-center py-2'>
          <Image className='w-20 h-20 rounded-full -mr-4' source={require("@/assets/images/delivery-girl.png")} />
          <Text className='text-center flex-1 pl-4'>Delivering in 20-30 mins</Text>
          <TouchableOpacity>
            <Text className='font-bold text-lg' style={{color: themeColors.bgColor(1)}}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ✅ NEW WRAPPER TO ALLOW SCROLLVIEW TO FLEX */}
      <View className="flex-1"> 
        {/* ✅ KEEP SCROLLVIEW ONLY FOR DISHES */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 80 // ✅ Gives space below so last item isn’t hidden
          }}
          className='bg-white pt-1'
        >
          {
            restaurant.dishes.map((dish, index)=> {
              return(
                <View key={index}
                  className='flex-row gap-x-3 items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-4 shadow-md'
                >
                  <Text className='font-bold' style={{color:themeColors.primarydark}}>
                    2 x
                  </Text>
                  <Image className='h-14 w-14 rounded-full' source={dish.image}/>
                  <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                  <Text className='font-bold text-base'>${dish.price}</Text>
                  <TouchableOpacity className='p-1 rounded-full' style={{backgroundColor: themeColors.bgColor(1)}}>
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
      </View>

      {/* ✅ MOVED OUTSIDE SCROLLVIEW - STICKY BOTTOM TOTALS */}
      <View style={{backgroundColor: themeColors.bgColor(0.2)}} className='pt-3 pb-4 px-8 rounded-t-3xl space-y-4 gap-y-2'>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>SubTotal</Text>
          <Text className='text-gray-700'>$20</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Delivery Fee</Text>
          <Text className='text-gray-700'>$2</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700 font-extrabold'>Order Total</Text>
          <Text className='text-gray-700 font-extrabold'>$22</Text>
        </View>
        <View className='mt-3'>
          <TouchableOpacity
          onPress={()=> navigation.navigate("OrderPreparing")}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className='p-3 rounded-full'
          >
            <Text className='text-white text-center font-bold text-lg'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}