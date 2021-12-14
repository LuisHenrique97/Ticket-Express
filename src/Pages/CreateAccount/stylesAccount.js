import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #007EA7;
    justify-content: center;
`;

export const ViewLogo = styled.View`
    justify-content: center;
    margin-bottom: 50px;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 180px;
    width: 180px;
`;

export const ViewInput = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius: 7px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
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
    border-color: #fff;
`;

export const InputText = styled.TextInput`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 50px;
    padding-left: 10px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-color: #fff;
    color: #fff; 
`;

export const ButtonCreate = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #003459;
    height: 45px;
    margin: 0 15px;
    margin-top: 15px;
    border-radius: 8px;
`;

export const TextButton = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
`;

export const Buttons = styled.Text`
    color: #fff;
    font-size: 12px;
    text-align: center;
    margin: 10px;
`;