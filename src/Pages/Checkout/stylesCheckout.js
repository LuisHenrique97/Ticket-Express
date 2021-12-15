import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #007EA7;
    justify-content: space-between;
`;

export const ViewBox = styled.View`
    background-color: #fff;
    height: 30%;
    margin: 10px;
    border-radius: 8px;
    justify-content: space-around;
`;

export const ViewInfo = styled.View`
    flex-direction: row;
    margin: 0 10px;
`;

export const ViewLogo = styled.View`
    background-color: #a3a3a3;
    border-radius: 8px;
`;

export const Logo = styled.Image`
    height: 120px;
    width: 120px;
`;

export const ViewText = styled.View`
    margin-left: 10px;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const Subtitle = styled.Text`
    font-size: 13px;
`;

export const Price = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

export const TextOrg = styled.Text`
    margin-left: 10px;
    font-weight: bold;
`;

export const ButtonCheck = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 45px;
    margin: 0 10px;
    border-radius: 8px;
    margin-bottom: 10%;
`;

export const TextButton = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #003459;
`;

export const ViewPicker = styled.View`
    align-items: center;
    margin-bottom: 80%;
`;