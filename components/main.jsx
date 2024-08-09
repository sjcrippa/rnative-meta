import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import Screen from "./screen";
import { getLatestGames } from "../lib/getCritics";
import { AnimatedGameCard } from "./game-card";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
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
    </Screen>
  );
};
