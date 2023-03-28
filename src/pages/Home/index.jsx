import {
    HomeContainer,
    Container,
    Subtitle,
    Title,
    Paragraph,
    ButtonExplore,
    Circle,
    DivTexte,
    DivCircle
} from "./style";
import { Header } from "../../components/Header/index";
import "./style.css";

const Home = () => {
    return (
        <div className="Layout">
            <Header />
            <HomeContainer>
                <Container>
                    <DivTexte>
                        <Subtitle>So, you want to travel to</Subtitle>
                        <Title>SPACE</Title>
                        <Paragraph>
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </Paragraph>
                    </DivTexte>
                    
                    <DivCircle>
                        <Circle>
                            <ButtonExplore to="/space-tourism/destination">Explore</ButtonExplore>
                        </Circle>
                    </DivCircle>
                    
                </Container>
            </HomeContainer>
        </div>
    );
};

export { Home };
