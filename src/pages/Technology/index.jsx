import { useState } from "react";
import { Header } from "../../components/Header";
import {
    NumberTitle,
    Title,
    LeftColumn,
    NavBtn,
    TechContainer,
    TitleIntro,
    NameTech,
    DescriptionTech,
    ContainerImg,
    BtnLink,
    StyledImg,
    DivInfoTech,
    StyledImgLandscape
} from "./style";
import "./style.css";

import img_vehicule from "../../assets/img/technology/image-launch-vehicle-portrait.jpg";
import img_capsule from "../../assets/img/technology/image-space-capsule-portrait.jpg";
import img_spaceport from "../../assets/img/technology/image-spaceport-portrait.jpg";

import img_vehicule_landscape from "../../assets/img/technology/image-launch-vehicle-landscape.jpg";
import img_capsule_landscape from "../../assets/img/technology/image-space-capsule-landscape.jpg";
import img_spaceport_landscape from "../../assets/img/technology/image-spaceport-landscape.jpg";


const dataTechnology = {
    vehicle: {
        name: "launch vehicle",
        description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    spaceport: {
        name: "spaceport",
        description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    capsule: {
        name: "space capsule",
        description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
};

const Technology = () => {
    const [detailTech, setDetailTech] = useState("vehicle");
    const setTechnology = (nameTech) => {
        setDetailTech(nameTech);
    };

    const renderImg = () => {
        if(detailTech === "vehicle") {
            return <StyledImg src={img_vehicule} alt="Illustration of launch vehicle" />
        }
        if(detailTech === "capsule") {
            return <StyledImg src={img_capsule} alt="Illustration of space capsule" />
        }
        if(detailTech === "spaceport") {
            return <StyledImg src={img_spaceport} alt="Illustration of spaceport" />
        }
    }

    const renderImgLandscape = () => {
        if(detailTech === "vehicle") {
            return <StyledImgLandscape src={img_vehicule_landscape} alt="Illustration of launch vehicle" />
        }
        if(detailTech === "capsule") {
            return <StyledImgLandscape src={img_capsule_landscape} alt="Illustration of space capsule" />
        }
        if(detailTech === "spaceport") {
            return <StyledImgLandscape src={img_spaceport_landscape} alt="Illustration of spaceport" />
        }
    }

    return (
        <div className="Layout-tech">
            <Header></Header>
            <Title>
                <NumberTitle>03</NumberTitle>Space launch 101
            </Title>

            <div>
                `{renderImgLandscape()}`
            </div>

            <TechContainer>
                <LeftColumn>
                    <NavBtn>
                        <BtnLink onClick={() => setTechnology("vehicle")}>
                            1
                        </BtnLink>
                        <BtnLink onClick={() => setTechnology("spaceport")}>
                            2
                        </BtnLink>
                        <BtnLink onClick={() => setTechnology("capsule")}>
                            3
                        </BtnLink>
                    </NavBtn>

                    <DivInfoTech>
                        <TitleIntro>The terminology...</TitleIntro>
                        <NameTech>{dataTechnology[detailTech].name}</NameTech>
                        <DescriptionTech>
                            {dataTechnology[detailTech].description}
                        </DescriptionTech>
                    </DivInfoTech>
                </LeftColumn>
                <ContainerImg>
                    `{renderImg()}`
                </ContainerImg>
            </TechContainer>
        </div>
    );
};

export { Technology };
