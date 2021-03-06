import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import Error from '../../Shared/Error';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eror, setError] = useState('');

    const handleSubmit = () => {
        const user = {
            email,
            password
        }

        if(email === "" || password === "") {
            setError("Por favor, preencha sua crendencial")
        } else {
            console.log("success")
        }
    }

    
    return (
       <FormContainer title={"Login"}>
          <Input
              placeholder={"Email"}
              name={"email"}
              id={"email"}
              value={email}
              onChangeText={(text) => setEmail(text)}  
          />
          <Input
              placeholder={"Senha"}
              name={"password"}
              id={"password"}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}  
          />
          <View style={styles.buttonGroup}>
              {error ? <Error message={error} /> : null}
              <Button title="Login" onPress={() => handleSubmit()}/>  
          </View>
          <View style={[{ marginTop: 40}, styles.buttonGroup]}>
              <Text style={styles.middleText}>Não tem uma conta ainda?</Text>
              <Button title="Register"
                onPress={
                    () => props.navigation.navigate("Register")
                }
              />    
          </View>
       </FormContainer>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: '80%',
        alignItems: 'center'
    },
    middleText: {
        marginBottom: 20,
        alignSelf: 'center'
    }
})
export default Login;