import { useEffect, useState } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
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
            <ScrollView>
              {
                games.map((game) => <GameCard key={game.slug} game={game} />)
              }
            </ScrollView>
          )
      }
    </View>
  );
};
