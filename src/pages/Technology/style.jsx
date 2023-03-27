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
    @media (max-width: 1200px) {
        margin-bottom: 50px;
        margin-left: 38px;
        text-align: center;
    }
    @media (max-width: 750px){
        font-size: 19px;
        margin-left: 18px;
    }
`;

export const NumberTitle = styled.span`
    opacity: 0.25;
    margin-right: 28px;
`;

export const LeftColumn = styled.div`
    display: flex;
    gap: 80px;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const NavBtn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 1200px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const TechContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 165px;
    margin-right: 165px;
    gap: 15%;
    margin-top: -50px;
    @media (max-width: 1200px) {
        flex-direction: column;
        margin-left: 105px;
        margin-right: 105px;
    }
    @media (max-width: 750px) {
        margin-left: 16px;
        margin-right: 16px;
    }
`;

export const TitleIntro = styled.h3`
    color: rgba(208, 214, 249, 1);
    text-transform: uppercase;
    font-size: 16px;
    line-height: 19px;
    margin-top: 0px;
    letter-spacing: 3px;
    @media (max-width: 1200px) {
        text-align: center;
    }
    @media (max-width: 750px) {
        font-size: 14px;
        margin-top: -30px;
    }
`;

export const NameTech = styled.h2`
    font-family: bellefair;
    font-size: 56px;
    line-height: 64px;
    color: white;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    @media (max-width: 750px) {
        font-size: 24px;
    }
`;

export const DescriptionTech = styled.p`
    max-width: 444px;
    color: rgba(208, 214, 249, 1);
    font-size: 18px;
    font-family: barlowNonCondensed;
    line-height: 32px;
    margin-top: 15px;
    @media (max-width: 1200px) {
        text-align: center;
    }
    @media (max-width: 750px) {
        font-size: 15px;
        padding-bottom: 50px;
    }
`;

export const ContainerImg = styled.div`
    margin-top: -8%;
    display: flex;
    align-items: center;
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
    @media (max-width: 750px) {
        width: 50px;
        height: 50px;
        font-size: 16px;
    }
`;

export const StyledImg = styled.img`
    width: 450%;
    display: flex;
    justify-content: end;
    @media (max-width: 1200px) {
        display: none;
    }
`;

export const DivInfoTech = styled.div`
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledImgLandscape = styled.img`
    display: none;
    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-bottom: 8%;
    }
    @media (max-width: 1200px) {
        margin-top: -5%;
        margin-bottom: 16%;
    }
`;

