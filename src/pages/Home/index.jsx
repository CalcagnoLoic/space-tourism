import {
    HomeContainer,
    Container,
    Subtitle,
    Title,
    Paragraph,
    ButtonExplore,
    Circle,
} from "./style";
import { Header } from "../../components/Header/index";
import "./style.css";

const Home = () => {
    return (
        <div className="Layout">
            <Header />
            <HomeContainer className="test">
                <Container>
                    <div>
                        <Subtitle>So, you want to travel to</Subtitle>
                        <Title>SPACE</Title>
                        <Paragraph>
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </Paragraph>
                    </div>
                    <Circle>
                        <ButtonExplore>Explore</ButtonExplore>
                    </Circle>
                </Container>
            </HomeContainer>
        </div>
    );
};

export { Home };
