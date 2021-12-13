import styled from "styled-components/native";

export const Container = styled.View`
    margin: 20px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.Image`
    height: 140px;
    width: 140px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
`;

export const ViewEvent = styled.TouchableOpacity`
   margin-left: -40%;
`;

export const TextName = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const TextPlace = styled.Text`
    margin-top: -5px;
    color: #fff;
    font-size: 12px;
`;

export const TextDate = styled.Text`
    font-weight: bold;
    color: #fff;
    font-size: 13px;
`;