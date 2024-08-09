import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";

import Screen from "../components/screen";
import { Score } from "../components/score";
import { getGameDetails } from "../lib/getCritics";

export default function GameDetail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerTitle: "Game Detail",
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View className="flex-1 px-2 items-center">
        <View>
          {gameInfo === null ? (
            <ActivityIndicator color={"#fff"} size={"large"} />
          ) : (
            <ScrollView>
              <View className="justify-center items-center text-center">
                <Image
                  className="mb-4 rounded-xl"
                  source={{ uri: gameInfo.img }}
                  style={{ width: 214, height: 294 }}
                />
                <Score score={gameInfo.score} maxScore={100} />
                <Text className="text-white mt-2 text-center font-bold text-xl">
                  {gameInfo.title}
                </Text>
                <Text className="text-white/70 mt-4 text-left mb-8 text-sm">
                  {gameInfo.description}
                </Text>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </Screen>
  );
}
