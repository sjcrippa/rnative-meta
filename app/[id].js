import { View, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

import Screen from "../components/screen";

export default function GameDetail() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <View className="flex-1 px-2 justify-center items-center">
        <View>
          <Text className="text-white font-bold mb-8 text-2xl">
            Detalle del juego {id}
          </Text>
        </View>
        <Link href="/" className="text-blue-500">
          Volver atras
        </Link>
      </View>
    </Screen>
  );
}
