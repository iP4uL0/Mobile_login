// puxando da bilbioteca 
import { View, Text,  TextInput, Pressable,  StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import styled from "styled-components/native"
import Title from "../components/Titulo/titulo"
import React, { useEffect, useState } from "react";
import InputTexto from "../components/input/input";
// 
export default function App(){
    // states utilizados
    const [email, setEmail] = useState('')
    useEffect(()=>{
        console.log(email)
    },[email])
    // 
    return(
    <Tela>
        <Title texto={"Entrar"} flag={true}/>
        <Title  texto={"Bem vindo ao app"} flag={false}/>
        <Container >
            <InputTexto 
                erro={true}
                placeholder="Digite seu e-mail..." 
                placeholderTextColor={'#6C757D'}
                onChangeText={text => setEmail(text)}
            />

            <InputTexto 
                erro={false}
                secureTextEntry={true}
                placeholder="Digite sua senha..." 
                placeholderTextColor={'#6C757D'}
               
            />
        </Container>
        <ContainerBotao>
            <Botao>
                <TextoBotao>Entrar</TextoBotao>
            </Botao>
            <LinhaIcones>
                <Icon name="google" size={30} color="#fff" ></Icon>
                <Icon name="instagram" size={30} color="#fff" ></Icon>
                <Icon name="github" size={30} color="#fff" ></Icon>
            </LinhaIcones>
            <Links >Cadastre-se</Links>
            <Links >Esqueci a senha</Links>
        </ContainerBotao>
    </Tela>)
}

const Tela = styled.View`
flex: 1;
background-color:#151932 ;
padding: 26px;

`
const Container = styled.View`
gap: 25;
`
const ContainerBotao = styled.View`
margin-top: 65px;
gap: 25;
`
const Botao = styled.Pressable`
background-color: #fff;
padding: 20px;
border-radius: 20px;
margin-top: 35px;
`
const TextoBotao = styled.Text`
text-align: center;
font-size: 24px;
font-weight: bold;
`
const Links = styled.Text`
text-align: center;
color:#fff;
font-size: 16px;
margin-top: 15px;
`
const LinhaIcones = styled.View`
    flex-direction: row;
    justify-content: center;
    gap: 15;
    
`