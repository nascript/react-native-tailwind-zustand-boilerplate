import { SafeAreaView } from "react-native-safe-area-context"
import { Image, Linking, Text, TouchableOpacity, View } from "react-native"
import { Link } from "expo-router"
import { useStore } from "@lib/store"
import { useCallback } from "react"

const App = () => {
  const click = useStore(useCallback((state) => state.click, []))
  const openGitHub = () => {
    Linking.openURL('https://github.com/nascript')
  }
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center space-y-8">
      <Text className="text-2xl">Welcome to React Native Boilerplate</Text>
      <Text
        className="py-2 px-4 rounded-md text-blue-500 text-sm underline"
        onPress={openGitHub}>
        by @nascript Github
      </Text>
      <View className="p-4 bg-white rounded-lg shadow-md w-11/12">
        <Text className="text-lg font-semibold mb-2">About This Boilerplate</Text>
        <Text className="text-gray-700 mb-4">
          This React Native boilerplate is equipped with TailwindCSS for styling and Zustand for state management.
          It helps you quickly set up a new project with modern tools and best practices.
        </Text>

        <Text className="text-lg font-semibold mb-2">TailwindCSS</Text>
        <Text className="text-gray-700 mb-4">
          TailwindCSS is a utility-first CSS framework that allows you to build custom designs directly in your markup.
          With TailwindCSS, you can apply styles directly to your components with ease and flexibility.
        </Text>

        <Text className="text-lg font-semibold mb-2">Zustand</Text>
        <Text className="text-gray-700 mb-4">
          Zustand is a small, fast, and scalable state management solution for React. It provides a simple and intuitive API
          for managing state in your applications without the overhead of more complex solutions.
        </Text>

      </View>

      <View className="p-4 bg-white rounded-lg shadow-md w-11/12">
        <Text className="text-2xl">Try Zustand management state</Text>
        <Text className="text-xl mt-6">Look at the number of clicks: {click}</Text>
        <View className="flex justify-between items-center">
          <Link
            className="text-center w-full bg-yellow-400 text-md p-2 mt-4 rounded-lg"
            href="/hello"
          >
            Go to Another Page
          </Link>
          <Link
            className="text-center w-full bg-blue-400 text-md p-2 mt-2 rounded-lg"
            href="/clicks"
          >
            Go to Clicks Page
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App
