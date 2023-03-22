import styled from "styled-components";

export const Title = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 5px;
    margin-bottom: 90px;
    margin-left: 166px;
    margin-bottom: 137px;
    @media (max-width: 1450px) {
        margin-bottom: 100px;
    }
`;

export const NumberTitle = styled.span`
    opacity: 0.25;
    margin-right: 28px;
`;

export const LeftColumn = styled.div`
    display: flex;
    gap: 80px;
    @media (max-width: 1450px) {
        order: 1;
        justify-content: center;
        margin-top: 50px;
    }
`;

export const NavBtn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const TechContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 165px;
    margin-right: 165px;
    gap: 15%; 
    margin-top: -50px;
    @media (max-width: 1450px) {
        gap: 5%;
        flex-direction: column;
        padding-bottom: 50px;
    }
`;

export const TitleIntro = styled.h3`
    color: rgba(208, 214, 249, 1);
    text-transform: uppercase;
    font-size: 16px;
    line-height: 19px;
    margin-top: 0px;
    letter-spacing: 3px;
`;

export const NameTech = styled.h2`
    font-family: bellefair;
    font-size: 56px;
    line-height: 64px;
    color: white;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
`;

export const DescriptionTech = styled.p`
    max-width: 444px;
    color: rgba(208, 214, 249, 1);
    font-size: 18px;
    font-family: barlowNonCondensed;
    line-height: 32px;
    margin-top: 15px;
`;

export const ContainerImg = styled.div`
    margin-top: -8%;
    width: 100px;
    @media (max-width: 1450px) {
        order: 0;
        margin-top: -1%;
        display: block;
        margin: 0 auto;
        width: 50%;
    }
    @media (min-width: 850px) and (max-width: 1100px) {
        width: 80%;
    }
`;

export const BtnLink = styled.button`
    font-family: bellefair;
    font-size: 32px;
    background-color: transparent;
    color: rgba(255, 255, 255, 1);
    border-radius: 100%;
    width: 80px;
    height: 80px;
    cursor: pointer;
    border-color: white;
`;
