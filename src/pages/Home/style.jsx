import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Container = styled.div`
    margin-left: 165px;
    margin-right: 8%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        flex-direction: column;
        margin-left: 165px;
        margin-right: 165px;
    }
    @media (max-width: 650px) {
        margin-left: 24px;
        margin-right: 24px;
}
`;

export const Subtitle = styled.h2`
    color: rgba(208, 214, 249, 1);
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 5px;
    @media (max-width: 1200px) {
        text-align: center;
    }
    @media (max-width: 650px) {
        font-size: 16px;
    }
`;

export const Title = styled.h1`
    color: rgba(255, 255, 255, 1);
    font-family: bellefair;
    font-size: 150px;
    line-height: 22px;
    @media (max-width: 1200px) {
        text-align: center;
    }
    @media (max-width: 650px) {
        font-size: 80px;
    }
`;

export const Paragraph = styled.p`
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

export const ButtonExplore = styled.a`
    color: rgba(11, 13, 23, 1);
    font-size: 32px;
    letter-spacing: 2px;
    line-height: 36px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-family: bellefair;
    text-decoration: none;
    @media (max-width: 1200px) {
        justify-content: center;
    }
    @media (max-width: 650px){
        font-size: 20px;
    }
`;

export const Circle = styled.div`
    background-color: white;
    height: 274px;
    width: 274px;
    border-radius: 100%;
    justify-content: center;
    display: flex;
    margin-top: 7%;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 1200px) {
        margin-top: 169px;
        justify-content: center;
    }
    @media (max-width: 650px) {
        margin-top: 80px;
        margin-bottom: 48px;
        height: 150px;
        width: 150px;
    }
`;

export const DivTexte = styled.div`
    @media (max-width: 1200px) {
        display: block;
        margin: 0 auto;
    }
`

export const DivCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
`
