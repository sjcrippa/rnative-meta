import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator, Pressable, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getLatestGames } from "../lib/getCritics";
import { AnimatedGameCard, GameCard } from "./game-card";
import { Logo } from "./logo";
import { Link } from "expo-router";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets(); // limit margin of the screen, protecting the time and notifications menu.

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className='mx-5'>
        <Logo />
      </View>
      <Link asChild href='/about'>
        <Pressable>
          <Text className="mx-5 text-blue-400 text-xl mt-2">
            About
          </Text>
        </Pressable>
      </Link>
      {
        games.length === 0
          ? (<ActivityIndicator size={'large'} />)
          : (
            // here you could use scrollView, but its not so performant as FlatList. In order to use it, you need to change the scruture, for example, removing the mapping of games.
            <FlatList
              data={games}
              keyExtractor={(game) => game.slug}
              renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
            >
            </FlatList>
          )
      }
    </View >
  );
};
