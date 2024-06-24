    import React from 'react';
    import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
    import Sobre from './sobre';
    import GOGO from './image 3.png';
    import image from './image6.png';
     
    export default function App() {
        const [page, setPage] = React.useState('home');
     
        const renderPage = () => {
            if (page === 'home') {
                return (
                    <View style={styles.container}>
                        <Text style={styles.title}>  </Text>

                        <view style={styles.imag}>
                        <Image source={image}/>
                        </view>
                       
                        <Image source={GOGO}/>
                        
                        <Text style={styles.title}></Text>
                        <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                            <Text style={styles.buttonText }> Entrar </Text>
                        </TouchableOpacity>
                        </View>
                );
            } else if (page === 'sobre') {
                return <Sobre />;
            }
        };
     
        return <View style={styles.container}>{renderPage()}</View>
    }
        const styles = StyleSheet.create({
            container: {
                height: 950,
                
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                
            },
            title: {
                
                fontSize: 24,
                fontWeight: 'bold',
                color: '#fff',
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
            }, imag: {
                paddingBottom: 200,
                fontSize: 24,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 20,    
            },
        });