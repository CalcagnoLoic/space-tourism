import { useState } from "react";
import { Header } from "../../components/Header/index";
import {
    NumberTitle,
    Title,
    CrewContainer,
    JobTitle,
    Name,
    Description,
    RenderImg,
    LeftColumn,
    NavBtn,
    DotBtn
} from "./style";
import "./style.css";

import img_commander from "../../assets/img/crew/image-douglas-hurley.webp";
import img_specialist from "../../assets/img/crew/image-mark-shuttleworth.webp";
import img_pilot from "../../assets/img/crew/image-victor-glover.webp";
import img_engineer from "../../assets/img/crew/image-anousheh-ansari.webp";

const dataCrew = {
    commander: {
        jobtitle: "commander",
        name: "Douglas Hurley",
        description:
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    specialist: {
        jobtitle: "mission specialist",
        name: "Mark shuttleworth",
        description:
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    pilot: {
        jobtitle: "pilot",
        name: "Victor Glover",
        description:
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    engineer: {
        jobtitle: "flight engineer",
        name: "Anousheh Ansari",
        description:
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
};

const Crew = () => {
    const [detailCrew, setDetailCrew] = useState("commander");
    const setCrew = (nameCrew) => {
        setDetailCrew(nameCrew);
    };

    const renderImgCrew = () => {
        if (detailCrew === "commander") {
            return (
                <img src={img_commander} alt="Illustration of Douglas Hurley" />
            );
        }
        if (detailCrew === "specialist") {
            return (
                <img
                    src={img_specialist}
                    alt="Illustration of Mark Shuttleworth"
                    className="renderImgBis"
                />
            );
        }
        if (detailCrew === "pilot") {
            return (
                <img
                    src={img_pilot}
                    alt="Illustration of Victor Glover"
                    className="renderImgBis"
                />
            );
        }
        if (detailCrew === "engineer") {
            return (
                <img
                    src={img_engineer}
                    alt="Illustratio of Anousheh Ansari"
                    className="renderImgBis"
                />
            );
        }
    };

    return (
        <div className="Layout-crew">
            <Header></Header>
            <Title>
                <NumberTitle>02</NumberTitle>Meet your crew
            </Title>
            <CrewContainer>
                <LeftColumn>
                    <div>
                        <JobTitle>{dataCrew[detailCrew].jobtitle}</JobTitle>
                        <Name>{dataCrew[detailCrew].name}</Name>
                        <Description>
                            {dataCrew[detailCrew].description}
                        </Description>
                    </div>
                    <NavBtn>
                        <DotBtn onClick={() => setCrew("commander")}></DotBtn>
                        <DotBtn onClick={() => setCrew("specialist")}></DotBtn>
                        <DotBtn onClick={() => setCrew("pilot")}></DotBtn>
                        <DotBtn onClick={() => setCrew("engineer")}></DotBtn>
                    </NavBtn>
                </LeftColumn>
                <RenderImg>`{renderImgCrew()}`</RenderImg>
            </CrewContainer>
        </div>
    );
};

export { Crew };
