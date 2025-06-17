/* zona1: importaciones */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//componente propio texto
const Texto= ({style})=>{
  const [contenido,setContenido]=useState('Hola mundo');
  const actualizaTexto=()=>{setContenido('Estado modificado')};
  return(
      <Text style={[styles.Text,style]} onPress={actualizaTexto}>{contenido}</Text>
  )
}
/* componente propio button
const Boton= ()=>{
  const [cBoton,setCBoton]=useState('Presionar');
  const actualizaBoton=()=>{setCBoton('Me presionaron')};
  return(
    <Button onPress={actualizaBoton}title={cBoton}></Button>
  )
}

/*zona 2 main o zona de ejecución*/
export default function App() {
  return (

    <View style={styles.container}>
      <Texto style={styles.azul}></Texto>
      <Texto style={styles.verde}></Texto>
      <Texto style={styles.negro}></Texto>
      {/* <Boton></Boton> */}
      <StatusBar style="auto" />
    </View>
  );
}


/* zona3: estilos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
  },
  Text:{
    color:'white',
    fontSize:27,

  },
  azul:{backgroundColor:'red',},
  verde:{backgroundColor:'green'},
  negro:{backgroundColor:'black',}
});

