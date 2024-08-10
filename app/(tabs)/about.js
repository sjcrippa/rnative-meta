import { Link } from "expo-router";
import { styled } from "nativewind";
import { Pressable, ScrollView, Text, View } from "react-native";

import Screen from "../../components/screen";
import { HomeIcon } from "../../components/icons";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView className="px-2">
        <Link asChild href="/">
          <StyledPressable className="active:opacity-50">
            <HomeIcon />
          </StyledPressable>
        </Link>

        <View className="mt-5">
          <Text className="text-white font-bold mb-2 text-2xl">About</Text>
          <Text className="text-white text-white/90 mb-4">Contenido</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
