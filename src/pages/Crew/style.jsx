import styled from "styled-components";

export const Title = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 5px;
    margin-bottom: 90px;
    margin-left: 166px;
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
    gap: 250px; //adapter le gap sur laptop device
    margin-top: -50px;
`;

export const JobTitle = styled.h3`
    font-family: bellefair;
    font-size: 32px;
    text-transform: uppercase;
    line-height: 37px;
    color: rgba(255, 255, 255, 1);
    opacity: 0.5;
    margin-top: 80px;
`;

export const Name = styled.h3`
    color: white;
    font-family: bellefair;
    text-transform: uppercase;
    font-size: 56px;
    line-height: 64px;
    margin-top: -2%;
`;

export const Description = styled.p`
    font-family: barlowNotCondensed;
    font-size: 18px;
    color: rgba(208, 214, 249, 1);
    line-height: 32px;
    max-width: 444px;
    margin-top: -6%;
`;

export const RenderImg = styled.div`
    margin-top: -12%;
    width: 5px;
`;

export const LeftColumn = styled.div``;

export const NavBtn = styled.div`
    display: flex;
    gap: 25px;
    margin-top: 55px;
`;

export const DotBtn = styled.button`
    border: none;
    border-radius: 100%;
    height: 15px;
    width: 15px;
    opacity: 0.17;
    cursor: pointer;
    &:active, &:hover {
        opacity: 1;
    }
`


