import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import Error from '../../Shared/Error';
import{ KeyboardAwareScrollView, keyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"




const Register= (props) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    const register = () => {
        if (
           email === '' ||
           name === '' ||
           phone === '' ||
           password === '' 
        ) {
            setError("Por favor preencha o formulário corretamente")
        }
    }
    return (
        <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
        >
            <FormContainer title="Register">
                <Input
                    placeholder={"Email"}
                    name={"email"}
                    id={"email"}
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <Input
                    placeholder={"Nome"}
                    name={"name"}
                    id={"name"}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder={"Telefone"}
                    name={"phone"}
                    id={"phone"}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder={"Senha"}
                    name={"password"}
                    id={"password"}
                    secureTextEntry={true}
                    onChangeText={(text) => setEmail(text)}
                />
                <View style={styles.buttonGroup}>
                    {error ? <Error message={error} /> : null}
                </View>
                <View>
                    <Button
                        title={"Cadastrar"} 
                        onPress={() => register()}
                    />
                </View>
                <View  style={[{ marginTop: 40 }, styles.buttonGroup]}>
                    <Button 
                        title={"Voltar"}
                        onPress={() => props.navigation.navigate("Login")}
                    
                    />
                </View>
            </FormContainer>

        </KeyboardAwareScrollView>
    );
}


const styles = StyleSheet.create({
    buttonGroup: {
      width: "80%",
      alignItems: "center",
    },
    middleText: {
      marginBottom: 20,
      alignSelf: "center",
    },
});

export default Register;