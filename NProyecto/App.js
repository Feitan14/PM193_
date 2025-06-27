import { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {

  

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleRegistro = () => {
    if (nombre === '') {
      Alert.alert('Error', 'Escribe tu nombre.');
      return;
    }

    const tieneNumero = /[0-9]/.test(nombre);
    if (tieneNumero) {
      Alert.alert('Error', 'El nombre no debe tener números.');
      return;
    }

    if (correo === '') {
      Alert.alert('Error', 'Escribe tu correo.');
      return;
    }

    if (correo.includes('@') === false || correo.includes('.') === false) {
      Alert.alert('Error', 'Escribe un correo válido con "@" y "."');
      return;
    }

    if (aceptaTerminos === false) {
      Alert.alert('Aviso', 'Debes aceptar los términos y condiciones.');
      return;
    }

    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  return (
    <ImageBackground
      source={require('./src/assets/4002676.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('./src/assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Registro de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        <View style={styles.switchContainer}>
          <Text>Acepto términos y condiciones</Text>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
          />
        </View>

        <Button
          title="Registrarse"
          onPress={handleRegistro}
          color="#4CAF50"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.88)',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
