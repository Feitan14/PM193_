import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [foodType, setFoodType] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const onSearch = () => {
    if (!foodType.trim() || !city.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    setLoading(true);

    // Retraso de 3 segundos para simulación de espera
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Results', { foodType, city });
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Buscar Restaurantes</Text>

      <TextInput
        placeholder="Tipo de comida (ej: sushi)"
        value={foodType}
        onChangeText={setFoodType}
        style={styles.input}
        editable={!loading}
      />
      <TextInput
        placeholder="Ciudad (ej: Guadalajara)"
        value={city}
        onChangeText={setCity}
        style={styles.input}
        editable={!loading}
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={onSearch}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Buscando...' : 'Buscar'}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#388E3C',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: '#a5d6a7',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
