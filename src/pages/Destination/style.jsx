import styled from "styled-components";

export const DestinationContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 165px;
    margin-right: 165px;
    gap: 250px;
    margin-top: -50px;
    @media (max-width: 1300px) {
        flex-direction: column;
        gap: 50px;
    }
    @media (max-width: 1300px) {
        margin-left: 16px;
        margin-right: 16px;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5%;
    margin-left: 5%;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;

export const ImgPlanetMobile = styled.img`
    @media (max-width: 650px) {
        width: 200px;
    }
`;

export const RightColumn = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;

export const Title = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 5px;
    margin-bottom: 90px;
    margin-left: 166px;
    @media (max-width: 1200px) {
        margin-left: 38px;
    }
    @media (max-width: 650px) {
        margin-left: 18px;
        font-size: 19px;
        text-align: center;
    }
`;

export const NumberTitle = styled.span`
    opacity: 0.25;
    margin-right: 28px;
`;

export const MainTitle = styled.h1`
    font-family: bellefair;
    text-transform: uppercase;
    color: white;
    font-size: 100px;
    margin-bottom: 8%;
    margin-top: 0px;
    padding-top: 55px;
    @media (max-width: 1200px) {
        text-align: center;
    }
    @media (max-width: 650px) {
        font-size: 56px;
    }
`;

export const Description = styled.p`
    color: rgba(208, 214, 249, 1);
    font-size: 18px;
    line-height: 32px;
    max-width: 444px;
    font-family: barlowNotCondensed;
    @media (max-width: 1200px) {
        text-align: center;
    }
    @media (max-width: 650px) {
        font-size: 15px;
    }
`;

export const ContainerExtra = styled.div`
    display: flex;
    gap: 80px;
    @media (max-width: 1300px) {
        justify-content: center;
    }
    @media (max-width: 650px) {
        gap: 10px;
        align-items: center;
        flex-direction: column;
    }
`;

export const TitleInfo = styled.h6`
    color: rgba(208, 214, 249, 1);
    font-size: 14px;
    letter-spacing: 3px;
    line-height: 17px;
    text-transform: uppercase;
    @media (max-width: 1300px) {
        text-align: center;
    }
    @media (max-width: 650px) {
        text-align: center;
    }
`;

export const SpanInfo = styled.p`
    color: white;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    font-family: bellefair;
    @media (max-width: 1300px) {
        text-align: center;
    }
    @media (max-width: 650px) {
        text-align: center;
    }
`;

export const Rectangle = styled.div`
    background-color: rgba(56, 59, 75, 1);
    max-width: 444px;
    height: 1px;
    @media (max-width: 1300px) {
        max-width: 100%;
        margin-top: 49px;
    }
`;

export const NavBtn = styled.div`
    display: flex;
    gap: 35px;
    margin-bottom: 55px;
    @media (max-width: 1300px) {
        justify-content: center;
        margin-bottom: 55px;
    }
    @media (max-width: 650px) {
        margin-left: 5%;
        margin-right: 5%;
        gap: 25px;
    }
`;

export const LinkBtn = styled.button`
    border: none;
    color: rgba(208, 214, 249, 1);
    font-size: 16px;
    text-transform: uppercase;
    line-height: 19px;
    letter-spacing: 3px;
    cursor: pointer;
    background-color: transparent;
    margin-bottom: -8%;
    @media (max-width: 650px) {
        font-size: 14px;
    }
`;

export const DivInfo = styled.div`
    @media (max-width: 1300px) {
        display: block;
        margin: 0 auto;
    }
    @media (max-width: 650px) {
        font-size: 14px;
    }
`;
