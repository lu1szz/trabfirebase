import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { bancoExterno } from './firebaseConnection';
import { useState } from 'react';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

export default function App() {

  const [comida1, setComida1] = useState('');
  const [comida2, setComida2] = useState('');
  const [comida3, setComida3] = useState('');

  async function addBancoExterno() {
    await setDoc(doc(bancoExterno, "receitas", "3"), {
      Prato1: comida1,
      Prato2: comida2,
      Prato3: comida3
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Comida 1"
        value={comida1}
        onChangeText={setComida1}
      />
      <TextInput
        style={styles.input}
        placeholder="Comida 2"
        value={comida2}
        onChangeText={setComida2}
      />
      <TextInput
        style={styles.input}
        placeholder="Comida 3"
        value={comida3}
        onChangeText={setComida3}
      />
      <TouchableOpacity style={styles.button} onPress={addBancoExterno}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#F50",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});