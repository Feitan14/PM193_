import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { searchRestaurants } from '../utils/api';

export default function ResultsScreen({ route }) {
  const { foodType, city } = route.params;
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await searchRestaurants(foodType, city);
        setRestaurants(data);
      } catch (err) {
        setError('Error al buscar restaurantes.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Cargando resultados...</Text>
      </View>
    );

  if (error)
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );

  if (restaurants.length === 0)
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.noResultsText}>No se encontraron resultados.</Text>
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {restaurants.map((r) => (
        <View key={r.fsq_id} style={styles.card}>
          <Text style={styles.name}>{r.name}</Text>

          {r.photos && r.photos.length > 0 ? (
            <Image
              source={{ uri: `${r.photos[0].prefix}original${r.photos[0].suffix}` }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : r.categories && r.categories[0] && r.categories[0].icon ? (
            <Image
              source={{
                uri: `${r.categories[0].icon.prefix}88${r.categories[0].icon.suffix}`,
              }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : null}

          <Text style={styles.info}>Distancia: {r.distance} metros</Text>
          <Text style={styles.info}>
            Dirección: {r.location?.formatted_address || 'No disponible'}
          </Text>
          <Text style={styles.info}>Teléfono: {r.tel || 'No disponible'}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 15,
    paddingBottom: 30,
    backgroundColor: '#f0f4f7',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#4CAF50',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  noResultsText: {
    fontSize: 18,
    color: '#555',
  },
});
