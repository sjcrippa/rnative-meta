import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getLatestGames } from "../lib/getCritics";
import { GameCard } from "./game-card";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets(); // para limites de la pantalla, que funciona en ambos OS, ios y android

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {
        games.length === 0
          ? (<ActivityIndicator size={'large'} />)
          : (
            <FlatList
              data={games}
              keyExtractor={(game) => game.slug}
              renderItem={({ item }) => <GameCard game={item} />}
            >
            </FlatList>
          )
      }
    </View >
  );
};
