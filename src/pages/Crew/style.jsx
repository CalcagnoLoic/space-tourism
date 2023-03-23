import styled from "styled-components";

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
    @media (max-width: 750px) {
        font-size: 19px;
        text-align: center;
        margin-left: 0px;
        margin-bottom: 25%;
    }
`;

export const NumberTitle = styled.span`
    opacity: 0.25;
    margin-right: 28px;
`;

export const CrewContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 165px;
    margin-right: 165px;
    gap: 250px;
    margin-top: -50px;
    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 105px;
    }
    @media (max-width: 750px) {
        margin-left: 19px;
        margin-right: 19px;
    }
`;

export const JobTitle = styled.h3`
    font-family: bellefair;
    font-weight: 400;
    font-size: 32px;
    text-transform: uppercase;
    line-height: 37px;
    color: rgba(255, 255, 255, 1);
    opacity: 0.5;
    margin-top: 80px;
    @media (max-width: 1200px) {
        font-size: 24px;
        text-align: center;
    }
`;

export const Name = styled.h3`
    color: white;
    font-family: bellefair;
    text-transform: uppercase;
    font-size: 56px;
    line-height: 64px;
    margin-top: -2%;
    @media (max-width: 1200px) {
        font-size: 40px;
        text-align: center;
    }
`;

export const Description = styled.p`
    font-family: barlowNotCondensed;
    font-size: 18px;
    color: rgba(208, 214, 249, 1);
    line-height: 32px;
    max-width: 444px;
    margin-top: -6%;
    @media (max-width: 1200px) {
        font-size: 16px;
        max-width: 456px;
        text-align: center;
    }
`;

export const RenderImg = styled.div`
    margin-top: -12%;
    display: flex;
    align-items: center;
    @media (max-width: 750px) {
        order: 0;
        margin-top: -8px;
    }
`;

export const LeftColumn = styled.div`
    @media (max-width: 1200px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 750px) {
        order: 1;
    }
`;

export const NavBtn = styled.div`
    display: flex;
    gap: 25px;
    margin-top: 35px;
    margin-bottom: 5%;
    @media (max-width: 1200px) {
        margin-bottom: 0;
    }
    @media (max-width: 750px) {
        margin-top: -35px;
    }
`;

export const DotBtn = styled.button`
    border: none;
    border-radius: 100%;
    height: 15px;
    width: 15px;
    opacity: 0.17;
    cursor: pointer;
    &:active,
    &:hover {
        opacity: 1;
    }
`;

export const StyledImg = styled.img`
    width: 450%;
    display: flex;
    @media (max-width: 1200px) {
        width: 368px;
        display: block;
        margin: auto;
        align-items: end;
    }
    @media (max-width: 750px) {
        width: 222px;
        display: block;
        margin: auto;
    }
`;

export const DivInfo = styled.div`
    @media (max-width: 750px) {
        order: 1;
        margin-bottom: 50px;
    }
`;
