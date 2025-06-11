/* zona1: importaciones */
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


const Texto= (props)=>{
  const {contenido}=props
  return(
    <Text>{contenido}</Text>
  )
}

/*zona 2 main o zona de ejecución*/
export default function App() {
  return (

    <View style={styles.container}>
      <Texto contenido="Hola"></Texto>
      <Texto contenido="Mundo"></Texto>
      <Texto contenido="ReactNative"></Texto>
      <Button title="presionale"></Button>

      <StatusBar style="auto" />
    </View>
  );
}


/* zona3: estilos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
