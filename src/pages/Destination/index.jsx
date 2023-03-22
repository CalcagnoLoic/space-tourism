import { useState } from "react";
import { Header } from "../../components/Header";
import "./style.css";
import img_moon from "../../assets/img/destination/image-moon.webp";
import img_mars from "../../assets/img/destination/image-mars.webp";
import img_europa from "../../assets/img/destination/image-europa.webp";
import img_titan from "../../assets/img/destination/image-titan.webp";

import {
    DestinationContainer,
    LeftColumn,
    RightColumn,
    Title,
    NumberTitle,
    MainTitle,
    Description,
    ContainerExtra, 
    TitleInfo,
    SpanInfo,
    Rectangle,
    NavBtn,
    LinkBtn
} from "./style";

const dataDestination = {
    moon: {
        name: "moon",
        description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avgDistance: "384,400 km",
        estimateTravelTime: "3 days",
    },
    mars: {
        name: "mars",
        description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        avgDistance: "225 MIL. km",
        estimateTravelTime: "9 months",
    },
    europa: {
        name: "europa",
        description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avgDistance: "628 MIL. km",
        estimateTravelTime: "3 years",
    },
    titan: {
        name: "titan",
        description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avgDistance: "1.6 BIL. km",
        estimateTravelTime: "7 years",
    },
};

const Destination = () => {
    const [detailPlanet, setDetailPlanet] = useState("moon");

    const setPlanet = (namePlanet) => {
        setDetailPlanet(namePlanet);
    };

    const renderImg = () => {
        if (detailPlanet === "moon") {
            return <img src={img_moon} alt="Illustration of moon" />;
        }
        if (detailPlanet === "mars") {
            return <img src={img_mars} alt="Illustration of Mars" />;
        }
        if (detailPlanet === "europa") {
            return <img src={img_europa} alt="Illustration of Europa" />;
        }
        if (detailPlanet === "titan") {
            return <img src={img_titan} alt="Illustration of Titan" />;
        }
    };

    return (
        <div className="Layout-dest">
            <Header />
            <DestinationContainer>
                <LeftColumn>
                    <Title>
                        <NumberTitle>01</NumberTitle>Pick your destination
                    </Title>
                    <div>`{renderImg()}`</div>
                </LeftColumn>

                <RightColumn>
                    <NavBtn>
                        <LinkBtn onClick={() => setPlanet("moon")}>Moon</LinkBtn>
                        <LinkBtn onClick={() => setPlanet("mars")}>Mars</LinkBtn>
                        <LinkBtn onClick={() => setPlanet("europa")}>
                            Europa
                        </LinkBtn>
                        <LinkBtn onClick={() => setPlanet("titan")}>
                            Titan
                        </LinkBtn>
                    </NavBtn>

                    <div>
                        <MainTitle>{dataDestination[detailPlanet].name}</MainTitle>
                        <Description>{dataDestination[detailPlanet].description}</Description>
                    </div>
                    <Rectangle></Rectangle>
                    <ContainerExtra>
                        <div>
                            <TitleInfo>avg. distance</TitleInfo>
                            <SpanInfo>{dataDestination[detailPlanet].avgDistance}</SpanInfo>
                        </div>
                        <div>
                            <TitleInfo>est. travel time </TitleInfo>
                            <SpanInfo>
                                {
                                    dataDestination[detailPlanet]
                                        .estimateTravelTime
                                }
                            </SpanInfo>
                        </div>
                    </ContainerExtra>
                </RightColumn>
            </DestinationContainer>
        </div>
    );
};

export { Destination };
