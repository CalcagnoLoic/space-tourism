import "./style.css";
import error404 from "../../assets/img/shared/404.png";

import {
    ErrorContainer,
    MainContainer,
    ErrorTitle,
    LinkError,
    ImgError,
} from "./style";

const Error = () => {
    return (
        <div className="Layout-404">
            <MainContainer>
                <ErrorContainer>
                    <ErrorTitle>
                        The page you are looking for does not seem to be present
                        anymore because it has either been deleted or moved...
                    </ErrorTitle>
                    <ImgError src={error404} alt="Error 404, site not found" />
                    <LinkError to="/">Go to the site</LinkError>
                </ErrorContainer>
            </MainContainer>
        </div>
    );
};

export { Error };
