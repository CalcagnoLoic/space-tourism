import styled from "styled-components";

export const ErrorContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    padding: 20px;
    border-radius: 50px;
    max-width: 444px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px){
        max-width: 222px;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const ErrorTitle = styled.h1`
    text-align: center;
    color: white;
    @media (max-width: 750px){
        font-size: 20px;
    }
`;

export const LinkError = styled.a`
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 28px;
    &:hover {
        font-style: italic;
    }
    @media (max-width: 750px){
        font-size: 16px;
    }
`;

export const ImgError = styled.img`
    width: 50%;
    @media (max-width: 750px){
        width: 40%;;
    }
`
