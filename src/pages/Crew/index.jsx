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
    DotBtn,
    StyledImg,
    DivInfo,
} from "./style";
import "./style.css";

import img_commander from "../../assets/img/crew/image-douglas-hurley.webp";
import img_specialist from "../../assets/img/crew/image-mark-shuttleworth.webp";
import img_pilot from "../../assets/img/crew/image-victor-glover.webp";
import img_engineer from "../../assets/img/crew/image-anousheh-ansari.webp";
import { Footer } from "../../components/Footer";

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
                <StyledImg
                    src={img_commander}
                    alt="Illustration of Douglas Hurley"
                />
            );
        }
        if (detailCrew === "specialist") {
            return (
                <StyledImg
                    src={img_specialist}
                    alt="Illustration of Mark Shuttleworth"
                />
            );
        }
        if (detailCrew === "pilot") {
            return (
                <StyledImg
                    src={img_pilot}
                    alt="Illustration of Victor Glover"
                />
            );
        }
        if (detailCrew === "engineer") {
            return (
                <StyledImg
                    src={img_engineer}
                    alt="Illustration of Anousheh Ansari"
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
                    <DivInfo>
                        <JobTitle>{dataCrew[detailCrew].jobtitle}</JobTitle>
                        <Name>{dataCrew[detailCrew].name}</Name>
                        <Description>
                            {dataCrew[detailCrew].description}
                        </Description>
                    </DivInfo>
                    <NavBtn>
                        <DotBtn
                            onClick={() => setCrew("commander")}
                            className={
                                detailCrew === "commander" ? "activeDotCrew" : "NotActiveDot"
                            }
                        ></DotBtn>
                        <DotBtn
                            onClick={() => setCrew("specialist")}
                            className={
                                detailCrew === "specialist" ? "activeDotCrew" : "NotActiveDot"
                            }
                        ></DotBtn>
                        <DotBtn
                            onClick={() => setCrew("pilot")}
                            className={
                                detailCrew === "pilot" ? "activeDotCrew" : "NotActiveDot"
                            }
                        ></DotBtn>
                        <DotBtn
                            onClick={() => setCrew("engineer")}
                            className={
                                detailCrew === "engineer" ? "activeDotCrew" : "NotActiveDot"
                            }
                        ></DotBtn>
                    </NavBtn>
                </LeftColumn>
                <RenderImg>`{renderImgCrew()}`</RenderImg>
            </CrewContainer>

            <Footer />
        </div>
    );
};

export { Crew };
