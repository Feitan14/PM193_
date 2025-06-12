/* zona1: importaciones */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//componente propio texto
const Texto= ()=>{
  const [contenido,setContenido]=useState('Hola mundo')
  const actualizaTexto=()=>{setContenido('Estado modificado')}
  return(
    <Text onPress={actualizaTexto}>{contenido}</Text>
  )
}


/*zona 2 main o zona de ejecución*/
export default function App() {
  return (

    <View style={styles.container}>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Button title='presionar'></Button>

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

