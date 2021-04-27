import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
} from "react-native";

import { Button } from "../components/Button";

import fonts from "../styles/fonts";
import colors from "../styles/colors";

export function UserIdentification() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  async function handleSubmit() {
    if(!name){
      return Alert.alert('Me diz como chamar você 😢')
    }
    try{
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate("Confirmation", {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    }catch{
      Alert.alert('Não foi possível salvar o seu nome. 😢')
    }
    
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{isFilled ? "😄" : "😀"}</Text>
                <Text style={styles.title}>Como podemos{"\n"}chamar você?</Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    paddingHorizontal: 54,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    marginTop: 24,
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
  },
  input: {
    marginTop: 50,
    padding: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.gray,
    fontSize: 18,
    textAlign: "center",
    color: colors.heading,
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
});
