import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import userImg from "../assets/diego.jpg";

import fonts from "../styles/fonts";
import colors from "../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '')
    }

    loadStorageUserName()

  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});
