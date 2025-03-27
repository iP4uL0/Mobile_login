
import styled from "styled-components/native"

type CampoDeTextoProps = {
    erro: boolean
}

 export const CampoTexto = styled.TextInput<CampoDeTextoProps>`
    background-color: #fff;
    font-size: 18px;
    padding: 20px;
    border: 4px solid ${({erro} :{erro: boolean}) => erro ? '#e03e59' : '#3341'};
`