import React, { useCallback } from "react"
import { Text, View, TouchableOpacity, Linking } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"
import { useStore } from "@lib/store"
import { MaterialIcons } from '@expo/vector-icons'

const Clicks = () => {
  const click = useStore(useCallback((state) => state.click, []))
  const incrementClick = useStore(
    useCallback((state) => state.incrementClick, [])
  )
  const decrementClick = useStore(
    useCallback((state) => state.decrementClick, [])
  )
  const openGitHub = () => {
    Linking.openURL('https://github.com/nascript')
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100 p-6 space-y-8">
      <Text
        className="py-2 px-4 rounded-md text-blue-500 text-sm underline"
        onPress={openGitHub}>
        by @nascript Github
      </Text>
      <View className="items-center">
        <MaterialIcons name="touch-app" size={64} color="purple" />
        <Text className="text-2xl font-bold text-center mt-4">
          Click Counter with Zustand
        </Text>
      </View>

      <Text className="text-lg w-64 text-center text-gray-700">
        Hi, this is a page where you can update the number of clicks with Zustand.
        Use the buttons below to increase or decrease the count.
      </Text>

      <View className="flex flex-row items-center space-x-4 mt-6">
        <TouchableOpacity
          className="bg-red-400 py-2 px-4 rounded-md"
          onPress={decrementClick}
        >
          <Text className="text-lg text-white">-</Text>
        </TouchableOpacity>
        <Text className="text-xl font-semibold">{click}</Text>
        <TouchableOpacity
          className="bg-violet-500 py-2 px-4 rounded-md"
          onPress={incrementClick}
        >
          <Text className="text-lg text-white">+</Text>
        </TouchableOpacity >
      </View >

      <Link
        className="text-center w-48 bg-yellow-500 text-md p-2 mt-6 rounded-md text-white"
        href="/"
      >
        Go to Home Page
      </Link>
    </SafeAreaView >
  )
}

export default Clicks
