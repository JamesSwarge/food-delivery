// app/index.js
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { themeColors } from '@/constants/Colors';
import * as Icon from 'react-native-feather'
import Categories from './Categories';
import Featured from './FeaturedRow';
import { featured } from '@/constants';
import FeaturedRow from './FeaturedRow';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark-content" />
      <View className="flex-row items-center space-x-2 mt-2 mb-4 px-4 pb-2">
        {/* Search bar code */}
        <View className='flex-row flex-1 items-center py-3 px-4 rounded-full border border-gray-300'>
          <Icon.Search height={25} width={25} stroke={'gray'} />
          <TextInput placeholder='Restaurants' className='ml-2 flex-1 text-lg' />
          <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-200' >
            <Icon.MapPin height={22} width={22} stroke={'gray'} className=''/>
            <Text className='text-gray-600 ml-1'>Nashik, IN</Text>
          </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className='p-3 rounded-full ml-3' >
          <Icon.Sliders height={18} width={18} strokeWidth={2.6} stroke={'white'} className=''/>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }} // increase padding if necessary
      >
        {/* Categories */}
        <Categories />

        {/* Featured rows */}
        <View className="mt-5">
          {[featured, featured, featured].map((featuredItem, index) => (
            <FeaturedRow
              key={index}
              title={featuredItem.title}
              description={featuredItem.desc}
              restaurants={featuredItem.restaurants}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
