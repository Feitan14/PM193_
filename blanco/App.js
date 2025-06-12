/* zona1: importaciones */
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


const Texto= (props)=>{
  const {children}=props
  return(
    <Text>{children}</Text>
  )
}

/*zona 2 main o zona de ejecución*/
export default function App() {
  return (

    <View style={styles.container}>
      <Texto>Hola</Texto>
      <Texto>Mundo</Texto>
      <Texto>React</Texto>
      <Button>Native</Button>

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

