import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <Link asChild href="/">
        <Pressable>
          <Text className="mx-5 text-blue-400 text-xl mt-24">
            Volver al inicio
          </Text>
        </Pressable>
      </Link>

      <View className="mx-5 mt-5">
        <Text className="text-white font-bold mb-2 text-2xl">About</Text>
        <Text className="text-white text-white/90 mb-4">Contenido</Text>
      </View>
    </ScrollView>
  );
}
