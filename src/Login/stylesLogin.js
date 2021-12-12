import styled from "styled-components/native";
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
`;

export const ViewLogo = styled.View`
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 250px;
    width: 250px;
`;

export const ViewInputEmail = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius: 7px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const BoxIcon = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    width: 11%;
    height: 50px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    border-top-width: 1px;
    border-left-width: 1px;
    border-bottom-width: 1px;
    border-color: #003459;
`;

export const InputText = styled.TextInput`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 50px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-color: #003459;
    color: #003459;
`;

export const ViewInputSenha = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius: 7px;
    margin: 15px 0px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #003459;
    height: 45px;
    margin: 0 15px;
    margin-top: 50px;
    border-radius: 8px;
`;

export const TextButton = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
`;

export const ResetPassword = styled.TouchableOpacity`
    align-items: flex-end;
    margin: 0 15px;
    margin-top: -10px;
`;

export const TextReset = styled.Text`
    color: #003459;
    font-size: 12px;
`;

export const Buttons = styled.Text`
    color: #003459;
    font-size: 12px;
    text-align: center;
    margin: 10px;
`;

