import { View } from "react-native";

import { Titulo, Subtitulo } from "./style"


export default function Title({texto,flag}){
return(
    <View>
         {flag == true ?
         <Titulo>{texto}</Titulo>
         :
         <Subtitulo>{texto}</Subtitulo>
        }
    </View>
)
}