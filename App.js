import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getLatestGames } from "./lib/getCritics";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ margin: 12, marginTop: 30 }}>
        <ScrollView>
          {games.map((game) => (
            <View key={game.slug} style={styles.card}>
              <Image source={{ uri: game.image }} style={styles.image} />
              <Text style={styles.title}>{game.title}</Text>
              <Text style={styles.score}>{game.score}</Text>
              <Text style={styles.description}>{game.description}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
  },
});
