/* zona1: importaciones */
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { Provider as ProveedorPaper } from 'react-native-paper';


/*zona 2 main o zona de ejecución*/
export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const alternarModoOscuro = () => setModoOscuro(previo =>!previo);

  return (
    <ProveedorPaper>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <View style={[styles.container, {backgroundColor:modoOscuro?'#111' : '#fff'}]}></View>
        <View styles={styles.container}>
          <Text styles={Styles.title}>Modo de pantalla: {modoOscuro ? 'oscuro' : 'claro'}</Text>
          <Switch value={modoOscuro} onValueChange={alternarModoOscuro}/>
        </View  >

        {/*boton 1*/}
        <View style={styles.section}>
          <Text style={styles.title}> Primer Boton</Text>
          <Button
          tittle="Boton Native"
          color="#007bff"
          onPress={() => window.alert('Boton Native Presionado')}
          ></Button>
        </View>
        
      </ScrollView>
    </ProveedorPaper>
  );
}


/* zona3: estilos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingButtom: 50
    //flexDirection:'row'
  },

  title: {
    fontSize: 16,
    marginVertical: 6,
    textAling: 'center',
    color:'#000'
  },
  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%'
  }
});


