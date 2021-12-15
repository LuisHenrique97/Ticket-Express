import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    /* background-color: #a23; */
`;

export const ViewLogo = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #a3a3a3;
    border-radius: 80px;
    padding: 20px;
`;

export const Logo = styled.Image`
    height: 100px;
    width: 100px;
`;

export const TextName = styled.Text`
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
`;

export const ViewButtons = styled.View`
    margin-top: 40px;
    justify-content: space-around;
`;

export const Buttons = styled.TouchableOpacity`
    background-color: #007EA7;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextButtons = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const ButtonOut = styled.TouchableOpacity`
    border: 1px;
    border-color: rgba(229, 229, 229, 0.9);
    margin: 40% 10px;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const TextButtonOut = styled.Text`
    color: #a33;
    font-size: 18px;
`;