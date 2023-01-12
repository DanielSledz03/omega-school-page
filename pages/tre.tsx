import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton1 from '../components/myButton1';
import MyInput1 from '../components/myInput1';
import MyButton2 from '../components/myButton2';
import { TEST_LINK } from '../components/link';

const vw = Dimensions.get('screen').width * 0.01;
const vh = Dimensions.get('screen').height * 0.01;

export default function Logowanie({ navigation }) {

    const [email, setEmail] = useState('');
    const [haslo, setHaslo] = useState('');

    async function zaloguj() {

        var paswd = /^(?=.*[0-9])(?=.*[!@_#$%^.&*])[a-zA-Z0-9!@_#$%^.&*]{8,32}$/;

        if (email.length == 0) {
            Alert.alert('Błąd', 'Wpisz adres E-mail');
            setColorInput1('rgb(200, 0, 0)');
        }
        else if (email.indexOf('@') == -1) {
            Alert.alert('Błąd', 'Wpisz poprawny adres E-mail');
            setColorInput1('rgb(200, 0, 0)');
        }
        else if (!(haslo.match(paswd))) {
            Alert.alert('Błąd', 'wpisz poprawne hasło');
            setColorInput2('rgb(200, 0, 0)');
        }
        else { //walidacja przeszla, przysylanie danych
            var link = "https://wide-hats-hide-89-64-102-126.loca.lt/notedMobile/Login/Login.php"; 
            //do testow po prostu podmien sobie link do php co sobie robisz na localhoscie w xampie

                var headers = {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                }; 
                var Data ={ 
                    Email: email, 
                    Password: haslo
                };
                fetch(link, {
                    method: 'POST', 
                    headers: headers, 
                    body: JSON.stringify(Data)
                })
                .then((response)=>response.json()) 
                .then((response)=>{ 
                  alert(response.Message);
                  if(response.Status == 1){
                    try {
                        AsyncStorage.setItem('loggedEmail', email); 
                        navigation.navigate('wyborPoziomu');
                        } catch (error) {
    
                            alert(error);
                        }
                  }


                })
                .catch((error)=>{ //jesli jest blad, to wyrzuca alert
                  alert("Error Occured " + error);
                });

                //jakbys mial problemy i wyrzucaloby jakies dziwne bledy typu "nieoczekiwany znak <", 
                //to w 48 podmień .json() na .text() i powinno pokazać normalny problem 
        }
    }

    function zapomnialHasla(){
        navigation.navigate('resetowanieHasla1');

    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.tekst1}>Zaloguj się</Text>
            <Image style={styles.logo} source={require('../media/NotedIcon.png')}></Image>
            <MyInput1 placeholder={'E-mail'} odbiorTekstu={(dane) =>{setEmail(dane)}}  rozmiarCzcionki={3 * vh} szerokosc={60 * vw} wysokosc={6 * vh} ></MyInput1>
            <MyInput1 haslo={true} placeholder={'Hasło'} odbiorTekstu={(dane) => {setHaslo(dane)}} rozmiarCzcionki={3 * vh} szerokosc={60 * vw} wysokosc={6 * vh}></MyInput1>
            <View style={{marginTop: 5 * vh}}></View>
            <MyButton1 rozmiarCzcionki={7 * vw} wysokosc={10*vh} szerokosc={60 * vw} funkcja={zaloguj} tekst={'Zaloguj się'}></MyButton1>
            <MyButton2 marginTop={3 * vh} funkcja={zapomnialHasla} rozmiarCzcionki={4 * vw} wysokosc={5 * vh} szerokosc={40 * vw} tekst={'Nie pamiętam hasła'}></MyButton2>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100 * vw,
        height: 100 * vh,
        backgroundColor: 'rgb(16, 16, 16)'
    },
    tekst1: {
        color: 'rgb(224, 224, 224)',
        fontSize: 45,
... (38 lines left)