// puxando da bilbioteca 
import { View, Text,  TextInput, Pressable,  StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import styled from "styled-components/native"
import Title from "../components/Titulo/titulo"
import React, { useEffect, useState } from "react";
import InputTexto from "../components/input/input";
import { apiConfig } from "../utils/api";

import { Link, useRouter} from "expo-router";
// 
export default function App(){
    // states utilizados
    const [email, setEmail] = useState('example@example.com')
    const [erroEmail, setErroEmail] = useState(false)
   
    const[passHide, setPassHide] = useState('true')
    
    const [senha, setSenha] = useState('@Sla1234')
    const [erroSenha, setErroSenha] = useState(false)
    const [fomulariovalido, setFormularioValido] = useState(true)

    const Router = useRouter()
    
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
    
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if(!passwordRegex.test(senha))
        {
            setErroSenha(true)
            setFormularioValido(false)
        }
        else
        {
            setErroSenha(false)
            setFormularioValido(true)
        }
    },[senha])

    // 
    async function login() {
        try{
            const resposta = await apiConfig.post('/login',{
                email: email,
                senha: senha
                
            })
           Router.push("/(home)/home")
        }
        catch(error){
        alert("Usuario ou senha incorreta")
        }
    }


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
            <LinhaTotal>
                <InputTexto 
                    erro={erroSenha}
                    placeholder="Digite sua senha..." 
                    placeholderTextColor={'#6C757D'}
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry = {passHide}
                />
                <Icones2 onPress={()=>setPassHide(!passHide)}>
                    <Icon name={passHide ? 'eye' : 'eye-slash'}
                    color ='#000' size={30}/>
                </Icones2>
              </LinhaTotal>
             {erroSenha ? <TextErrorHint>Senha invalida</TextErrorHint> : null}
            </View>
        </Container>
        <ContainerBotao>
            <Link href={"/(home)/home"}> 
          <Botao
            disable={fomulariovalido}
           onPress={()=>{
            login()
           
           }}
            >
                <TextoBotao>Entrar</TextoBotao>
            </Botao>
                </Link>
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
const LinhaTotal = styled.View`
position: relative;
width: 100%;
 `
const Icones2 = styled.TouchableOpacity`
top: -50;
align-items: end;
left: -20;
`