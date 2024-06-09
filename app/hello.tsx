import { Linking, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

const Hello = () => {
  const openGitHub = () => {
    Linking.openURL('https://github.com/nascript')
  }
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100 p-6 space-y-8">
      <View className="items-center">
        <Text className="text-2xl font-bold text-center mt-4">
          Welcome to Another Page
        </Text>
      </View>

      <Text className="text-lg w-64 text-center text-gray-700">
        Hi 👋, this is another page where you can navigate to different sections. Explore more below!
      </Text>

      <View className="items-center space-y-4">
        <Text className="text-sm text-gray-500">Explore new horizons with us.</Text>
      </View>

      <View className="space-y-4 mt-6">
        <TouchableOpacity className="w-48 bg-green-400 p-2 rounded-md">
          <Text className="text-center text-white text-md">Discover More</Text>
        </TouchableOpacity>

        <Link className="text-center w-48 bg-blue-400 text-md p-2 rounded-md text-white" href="/">
          Go to Home Page
        </Link>

        <TouchableOpacity className="w-48 bg-purple-400 p-2 rounded-md">
          <Text className="text-center text-white text-md">Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center">
        <Text
          className="py-2 px-4 rounded-md text-blue-500 text-sm underline"
          onPress={openGitHub}>
          by @nascript Github
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Hello
