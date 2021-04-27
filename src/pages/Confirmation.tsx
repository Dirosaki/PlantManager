import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😁'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { 
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen

  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
        {subtitle}
        </Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    marginTop: 64,
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
  },
  subtitle: {
    marginTop: 16,
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: "center",
    color: colors.heading,
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 46,
    width: "100%",
  },
});
