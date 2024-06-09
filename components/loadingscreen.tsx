import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const LoadingScreen = () => {
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center bg-purple-200">
      <Text className="text-xl">Loading...</Text>
    </SafeAreaView>
  )
}

export default LoadingScreen
