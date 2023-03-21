import styled from "styled-components";

export const DestinationContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 165px;
    margin-right: 165px;
    gap: 300px;
`;

export const LeftColumn = styled.div``;

export const RightColumn = styled.div`
    margin-top: 100px;
`;

export const Title = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 5px;
    margin-bottom: 90px;
`;

export const NumberTitle = styled.span`
    opacity: 0.25;
    &::after {
        padding-right: 10px;
    }
`;

export const MainTitle = styled.h1`
    font-family: bellefair;
    text-transform: uppercase;
    color: white;
    font-size: 100px;
    margin-bottom: 8%;
`;

export const Description = styled.p`
    color: rgba(208, 214, 249, 1);
    font-size: 20px;
    line-height: 32px;
    max-width: 444px;
`;

export const ContainerExtra = styled.div`
    display: flex;
    gap: 80px;
`;

export const TitleInfo = styled.h6`
    color: rgba(208, 214, 249, 1);
    font-size: 14px;
    letter-spacing: 3px;
    line-height: 17px;
    text-transform: uppercase;
`;

export const SpanInfo = styled.p`
    color: white;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    font-family: bellefair;
`;
