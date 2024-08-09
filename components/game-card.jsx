import { Link } from "expo-router";
import { styled } from "nativewind";
import { useEffect, useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Score } from "./score";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild >
      <StyledPressable className='active:opacity-50 border border-black active:border-white/50 mb-2 bg-slate-900 p-4 rounded-xl'>
        <View key={game.slug} className='flex-row gap-4'>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className='flex-shrink'>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text className='mt-2 flex-shrink' style={styles.description}>{game.description.slice(0, 100)}</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  )
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
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
