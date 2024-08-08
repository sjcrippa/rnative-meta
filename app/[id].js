import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del juego {id}
        </Text>
      </View>
      <Link href="/" className="text-blue-500">
        Volver atras
      </Link>
    </View>
  );
}
