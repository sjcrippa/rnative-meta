import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { HomeIcon } from "../components/icons";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <ScrollView className="pt-10 mx-5">
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
  );
}
2;
