import { View, Text, SafeAreaView, Image, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
// import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';

let LottieView;
if (Platform.OS !== 'web') {
  LottieView = require('lottie-react-native').default;
}

export default function OrderPreparing() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  
  useEffect(()=>{
    setTimeout(()=> {
      navigation.navigate("Delivery")
    }, 3000)
  }, [])

  return (
      <View className='flex-1 bg-white justify-center items-center w-full'>
        {Platform.OS !== 'web' ? (
          <LottieView
            source={require('@/assets/images/delivery-man.json')}
            autoPlay
            loop
            style={{
              width: width * 1.2,
              height: width * 1.2,
              alignSelf: 'center',
            }}
            // className="w-[80%] h-[80%] self-center"
          />
        ) : (
          <Image source={require('@/assets/images/delivery-man.gif')} style={{ width: 200, height: 200 }} />
        )}

      </View>
  )
}