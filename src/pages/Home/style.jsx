import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Container = styled.div`
    margin-left: 165px;
    margin-right: 8%;
    display: flex;
    justify-content: space-between;
`;

export const Subtitle = styled.h2`
    color: rgba(208, 214, 249, 1);
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 5px;
`;

export const Title = styled.h1`
    color: rgba(255, 255, 255, 1);
    font-family: bellefair;
    font-size: 150px;
    line-height: 22px;
`;

export const Paragraph = styled.p`
    color: rgba(208, 214, 249, 1);
    font-size: 18px;
    line-height: 32px;
    max-width: 444px;
    font-family: barlowNotCondensed;
`;

export const ButtonExplore = styled.p`
    color: rgba(11, 13, 23, 1);
    font-size: 32px;
    letter-spacing: 2px;
    line-height: 36px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-family: bellefair;
`;

export const Circle = styled.div`
    background-color: white;
    height: 274px;
    width: 274px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    margin-top: 7%;
    &:hover {
        cursor: pointer;
    }
`;
