import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    margin-top: 35px;
    @media (max-width: 750px){
        margin-top:25px;
    }
`;

export const MessageFooter = styled.p`
    color: white;
    font-family: bellefair;
    text-align: center;
    font-size: 20px;
    @media (max-width: 750px){
        font-size: 16px;
    }
`;
