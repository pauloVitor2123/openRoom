import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {TextInput, Button, Text} from "react-native-paper";
import {supabase} from "../../services/supabase";

export const LoginPage = () => {
  const [useEmail, setEmail] = useState("");
  const [usePassword, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const errorMsg = "Por favor, insira um e-mail e uma senha válidos.";
    try {
      if (!(useEmail && usePassword)) {
        throw errorMsg;
      }
      const {data, error} = await supabase.auth.signInWithPassword({
        email: useEmail,
        password: usePassword,
      });
      if (error) {
        throw errorMsg;
      }
      console.log(data.session);
      setMessage("Login bem-sucedido!");
    } catch (error) {
      console.log(error);
      setMessage(errorMsg);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="E-mail"
        value={useEmail}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={usePassword}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Entrar
      </Button>
      <View style={styles.messageContainer}>
        {message ? <Text style={styles.messageText}>{message}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  messageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  messageText: {
    color: "red",
    fontSize: 16,
  },
});
