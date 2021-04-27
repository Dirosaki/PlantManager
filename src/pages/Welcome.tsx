import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import wateringImg from "../assets/watering.png";
import fonts from "../styles/fonts";
import colors from "../styles/colors";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie{"\n"}suas plantas de{"\n"}forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidados de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 48,
    fontSize: 28,
    lineHeight: 34,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  subtitle: {
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: fonts.text,
    textAlign: "center",
    color: colors.heading,
  },
  button: {
    marginBottom: 10,
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green,
    borderRadius: 16,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
});
