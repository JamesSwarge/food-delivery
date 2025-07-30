// app/index.js
import { View, Text, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-start' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>

      {/* Option 1: Link component */}
      <Link href="/restaurant">
        <Text style={{ color: 'blue', marginBottom: 20 }}>Go to Restaurant (via Link)</Text>
      </Link>

      {/* Option 2: Programmatic navigation */}
      <TouchableOpacity onPress={() => router.push('/restaurant')}>
        <Text style={{ color: 'green' }}>Go to Restaurant (via router.push)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
