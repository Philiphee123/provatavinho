
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Home from './home';

 
export default function App() {
    const [page, setPage] = React.useState('sobre');
 
    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                    <Image source={require('../components/image6.png')} />    

                    <Text style={styles.title}> latitude  0.00</Text>
                    <Text style={styles.title}>____________________________________</Text>
                    <Text style={styles.title}> longetude 0.00</Text>  
                    <Text style={styles.title}>____________________________________</Text>             
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText }> ver minha localização </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText1 }> Voltar </Text>
                    </TouchableOpacity>
                    
                </View>
                
            );
        } else if (page === 'home') {
            return <Home />;
        }
    };
 
    return <View style={styles.container}>{renderPage()}</View>
}
    const styles = StyleSheet.create({
        container: {
            
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#black',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,    
        },
        button: {
            backgroundColor: '#007BFF',
            padding: 10,
            borderRadius: 5,
            width: 400,
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            textAlign: 'center',
        },

        button1: {
            backgroundColor: '#FFFFFF',
            padding: 10,
            borderRadius: 5,
            width: 400,
            margin: 40,
           width: 200,
        },
        buttonText1: {
        
            color: '#333',
            fontSize: 16,
            textAlign: 'center',
        },
    });