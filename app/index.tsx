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
    const [email, setEmail] = useState('example@example.com')
    const [erroEmail, setErroEmail] = useState(false)
    
    
    const [senha, setSenha] = useState('@Sla1234')
    const [erroSenha, setErroSenha] = useState(false)
    
    useEffect(()=>{
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email))
        {
            // Se o texto não incluir o caractere @ e tiver menos que 3 carateres
            // sera mostrado o campo como incorreto
            setErroEmail(true)
        }
        else{

            // Quando a pessoa inserir um email valido, as bordas vermelhas vão sumir
            setErroEmail(false)
        }
    },[email])
    
    useEffect(()=>{
        //  Usando expressão regular para diminuir a quantidade 
        //  de condicionais para testar a senha
        //  Esse Regex testa se a senha:
        //  * Pelo menos 8 caracteres
        //  * Pelo menos uma letra maiúscula
        //  * Pelo menos um número
        //  * Pelo menos um caractere especial (!@#$%^&*)
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if(!passwordRegex.test(senha))
        {
            setErroSenha(true)
        }
        else
        {
            setErroSenha(false)
        }
    },[senha])

    // 

    return(
    <Tela>\
        <Title texto={"Entrar"} flag={true}
        />
        <Title  texto={"Bem vindo ao app"} flag={false}/>
        <Container>
            <View>

            <InputTexto 
                erro={erroEmail}
                placeholder="Digite seu e-mail..." 
                placeholderTextColor={'#6C757D'}
                onChangeText={text => setEmail(text)}
            />
          {erroEmail ? <TextErrorHint>E-mail invalido</TextErrorHint> : null}
            </View>
            
            <View>
            <InputTexto 
                erro={erroSenha}
                secureTextEntry={true}
                placeholder="Digite sua senha..." 
                placeholderTextColor={'#6C757D'}
                onChangeText={text => setSenha(text)}
               
            />
             {erroSenha ? <TextErrorHint>Senha invalida</TextErrorHint> : null}
            </View>
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
const TextErrorHint = styled.Text`
    font-size: 16px;
    color: #E63946;
`