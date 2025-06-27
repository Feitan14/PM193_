import { Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen =() => {
    return(
        <View style={styles.container}>
            <Image source={require('NProyecto/src/assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
            />
            <Text style={styles.title}>
                Bienvenidoa la App
                </Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#222831',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:200,
        Heigbt:200
    },
    title:{
        marginTop:20,
        color:'#eeeeee',
        fontSize:'24',
        fontWeight:'bold'
    }
});