import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className="mx-5 text-blue-400 text-xl mt-24">
        Ir al inicio.
      </Link>

      <Text className="text-white font-bold mb-8 text-2xl">About</Text>
      <Text className="text-white text-white/90 mb-4">
        Contenido contenido contenido contenidoContenido contenido contenido
        contenidoContenido contenido contenido contenidoContenido contenido
        contenido contenidoContenido contenido contenido contenidoContenido
        contenido contenido contenidoContenido contenido contenido
        contenidoContenido contenido contenido contenidoContenido contenido
        contenido contenidoContenido contenido contenido contenidoContenido
        contenido contenido contenidoContenido contenido contenido
        contenidoContenido contenido contenido contenido
      </Text>
    </ScrollView>
  );
}
