import { Button, ButtonText } from "@gluestack-ui/themed";
import { View } from "@gluestack-ui/themed";
import { useState } from "react";
import { TextInput } from "react-native";
import { ref, set } from "firebase/database";
import { Text } from "@gluestack-ui/themed";
import { db } from './config';
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Asegúrate de tener esta importación

const MainLogin = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');

    function create () {
        set(ref(db, 'users/' + user), {
            username: user,
            password: password
        }).then(() => {
            alert('Data submited.');
            navigation.navigate('Demo');
        })
        .catch((error) =>{
            alert(error); 
        })
        ;
    }

    return (
        <View style={styles.container}>
            <Text>Firebase Login</Text>
            <TextInput style={styles.textBoxes} value={user} onChangeText={(user) => {setUser(user)}} placeholder="Username"></TextInput>
            <TextInput style={styles.textBoxes} value={password} onChangeText={(password) => {setPassword(password)}}placeholder="Password"></TextInput>
            <Button onPress={create}><ButtonText> Submit Data </ButtonText></Button>
        </View>
    );
}

export default MainLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    textBoxes: {
        width: '85%',
        fontSize: 18,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10
    }
});
