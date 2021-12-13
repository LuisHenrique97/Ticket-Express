import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #003459;
`;

export const Texto = styled.Text`
    color: #fff;
    font-size: 30px;
    background-color: #000;
`;

export const TextHome = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: -10px;
`;

export const ViewLogo = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 100px;
    width: 100px;
`;

export const ViewInputSearch = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius: 7px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
`;

export const BoxIcon = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    width: 11%;
    height: 50px;
    background-color: rgba(255,255,255, 0.15);
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`;

export const InputText = styled.TextInput`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 50px;
    padding: 10px;
    background-color: rgba(255,255,255, 0.15);
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    color: #fff;
`;