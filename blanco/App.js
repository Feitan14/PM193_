import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Buscar Restaurantes' }} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Resultados' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
