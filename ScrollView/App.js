/* Zona 1: Lugar de las importaciones */  
import { Button, StyleSheet, View } from 'react-native';

/* Zona 2: Main */
export default function App() {
  const AlertaBasica = () => {
    window.alert('Hola, soy una alerta basica');
  };

  const AlertaConfirmacion = () => {
    const confirmacion = window.confirm('¿Gus es gustambo?');
    if (confirmacion) {
      window.alert('Exactamente');
    } else {
      window.alert('Como que no?');
    }
  };

  const AlertaTexto = () => {
    const confirmacion = window.prompt('¿Erick está aqui?', 'ñero');
    if (confirmacion) {
      window.alert(`Exactamente, ${confirmacion}`);
    } else {
      window.alert('Respondeeeeeee');
    }
  };

  const AlertaConfrimacion = () => {
    const confirmacion = window.prompt('Que edad tienes?');
    const numero = parseInt(confirmacion);
    if (numero >= 1 && numero <= 70) {
      window.alert(`Tu edad es, ${numero}`);
    } else {
      window.alert('Edad icnorrectaaaaaaaaa');
    }
  };
  
  return (
    <View style={styles.container}>
      <Button title='Alerta basica' onPress={AlertaBasica}></Button>
      <Button title='Alerta de confirmacion' onPress={AlertaConfirmacion}></Button>
      <Button title='Alerta Erick' onPress={AlertaTexto}></Button>
      <Button title='Alerta Edad' onPress={AlertaConfrimacion}></Button>
    </View>
  );
}

/* Zona 3: Estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000',
  },
  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: 220,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  paperButton: {
    marginTop: 5,
    width: 220,
  },
});