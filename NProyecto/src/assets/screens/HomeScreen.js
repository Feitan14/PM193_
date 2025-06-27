import {
    ImageBackground,
    SafeAreaView,

    StyleSheet,
    Text
} from 'react-native';

const HomeScreen = () => {
return (
    <ImageBackground
    source={require('NProyecto/src/assets/4002676.jpg')}
    style={styles.background}
    >
    <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Pantalla Principal</Text>
    </SafeAreaView>
    </ImageBackground>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
background: {
    flex: 1,
    justifyContent: 'center',
},
content: {
    alignItems: 'center',
},
text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
},
});
