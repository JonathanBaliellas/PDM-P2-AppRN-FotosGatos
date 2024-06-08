import axios from 'axios';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface Imagem {
  url: string
}

export default function App() {
  const [imagem, setImagem] = useState<Imagem>()

  const exibirImagem = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search'
    const resposta = await axios.get(url)
    setImagem(resposta.data[0])
  }

  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao Gatix!</Text>
      <Pressable
        style={styles.button}
        onPress={exibirImagem}
      >
        <Text
          style={styles.buttonText}
        >Buscar gatinhos!</Text>
      </Pressable>
      <View>
        <Image 
          style={styles.image}
          source={{uri: imagem?.url}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 32,
    borderRadius: 8,
    margin: 16
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 16
  }
});
