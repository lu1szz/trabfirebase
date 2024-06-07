import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { bancoExterno } from './firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, getDoc, onSnapshot, setDoc, addDoc, collection } from 'firebase/firestore';


export default function App() {

  const [nome, setNome] = useState('Carregando...');
  const [nome2, setNome2] = useState('');

  useEffect(() => {
    async function pegarDados() {
      const referencia = doc(bancoExterno, "receitas", "1")

      getDoc(referencia)
        .then((snap) => {
          setNome(snap.data()?.Prato1)

        })

        .catch((erro) => {
          console.log(erro)
        })
    }
    pegarDados();
    onSnapshot(doc(bancoExterno,"receitas", "2"), (snap)=>{
      setNome2(snap.data()?.Prato2)
    })
  }, [])


  async function addBancoExterno() {
    await setDoc(doc(bancoExterno, "receitas", "3"), {
      Prato1: "Churrasco",
      Prato2: "Coxinha",
      Prato3: "Esfirra"
    })
  }

  async function addBancoExterno2() {
    await addDoc(collection(bancoExterno, "receitas"), {
      Prato1: "Pastel",
      Prato2: "Tapioca",
      Prato3: "Empada"
    })
  }


  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}>Informação:{nome}, {nome2}</Text>
      <TouchableOpacity style={{ backgroundColor:"#F50" }} onPress={addBancoExterno}>
        <Text style={{ fontSize: 20, paddingHorizontal:15 }}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: "#AFF" }} onPress={addBancoExterno2}>
        <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>Adicionar</Text>
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
});
