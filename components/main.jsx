import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getLatestGames } from "../lib/getCritics";
import { AnimatedGameCard } from "./game-card";
import { Logo } from "./logo";
import { Link } from "expo-router";
import { CircleInfoIcon } from "./icons";

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
      <View className='mx-5 flex-row justify-between items-center mb-4'>
        <View>
          <Logo />
        </View>
        <Link asChild href='/about'>
          <Pressable className='active:opacity-50'>
            <CircleInfoIcon />
          </Pressable>
        </Link>
      </View>
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
