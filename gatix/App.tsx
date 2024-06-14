import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import catApi from './utils/catApi';

interface Imagem {
  url: string
}

export default function App() {
  const [imagens, setImagens] = useState<Imagem[]>([])

  const exibirImagens = async () => {
    const resposta = await catApi.get('search')
    setImagens(resposta.data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>😻 Gatix</Text>
      </View>

      <View style={styles.list}>
        <FlatList 
          contentContainerStyle={styles.listContent}
          data={imagens}
          keyExtractor={(item) => item.url}
          renderItem={({item}) => (
            <Image 
            style={styles.image}
            source={{uri: item.url}}
            />
          )}
        />
      </View>
      
      <Pressable
        style={styles.button}
        onPress={exibirImagens}
      >
        <Text
          style={styles.buttonText}
        >Buscar gatinhos!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#0096F3',
    borderRadius: 8,
    bottom: 16,
    padding: 16,
    position: 'absolute',
    width: '80%',
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    backgroundColor: '#0096F3',
    width: '100%'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  image: {
    borderRadius: 16,
    height: 150,
    margin: 8,
    width: 150,
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 100,
  },
  listContent: {
    alignItems: 'center',
  },
});
