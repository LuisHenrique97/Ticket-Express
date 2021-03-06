import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const Header = styled.View`
    z-index: 99;
    position: absolute;
    top: 35px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 14px;
`;

export const HeaderButtom = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: #007EA7;
    border-radius: 23px;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.Image`
    width: 200px;
    height: 200px;
`;

export const EventName = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;
    color: #003459;
`;

export const Descripion = styled.Text`
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    color: #003459;
    line-height: 20px;
`;

export const ViewBanner = styled.View`
    background-color: #a5a5a5;
    align-items: center;
`;

export const ViewDescripition = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    height: 150px;
`;

export const TextDescription = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  align-items: center;
`;

export const ViewText = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    border-radius: 7px;
    padding-right: 15px;
`;

export const BoxIcon = styled.View`
    align-items: center;
    justify-content: center;
    width: 11%;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #003459;
    height: 45px;
    margin: 0 15px;
    margin-top: 30px;
    border-radius: 8px;
`;

export const TextButton = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
`;

export const ViewOrg = styled.View`
    margin-top: 20px;
    margin-left: 10px;
    flex-direction: row;
`;

export const TextOrg = styled.Text`
    font-weight: bold;
`;

export const TextButtonOrg = styled.Text`
    margin-left: 4px;
    color: #007EA7;
    font-weight: bold;
`;

export const ButtonOrg = styled.TouchableOpacity`
    
`;

export const ViewContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const ViewModal = styled.View`
    background-color: #007EA7;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const HeaderModal = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 25px;
`;

export const TextHeader = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    margin-left: 30px;
`;

export const BannerModal = styled.Image`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 8px;
`;

export const ModalDescription = styled.View`
    margin-top: 20px;
    margin-bottom: 10px;
    height: 250px;
`;

export const DescriptionText = styled.Text`
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 20px;
    color: #fff;
    font-size: 16px;
    line-height: 20px;
`;