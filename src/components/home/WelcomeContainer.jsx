import { ClipLoader } from "react-spinners"

import { scrollToLocation } from "../../utils"

export default function WelcomeContainer({ welcomeData, lan }) {
    return (
        welcomeData ?
            <div className="home--welcomeContainer">
                <img src={welcomeData.imgUrl} alt="" className="home--welcomeContainer--img" />
                <div className="home--welcomeContainer--buttonContainer">
                    <a
                        className="home--welcomeContainer--buttonContainer--button"
                        onClick={() => scrollToLocation(0)}
                    >
                        {welcomeData.contact[lan]}
                    </a>
                    <a
                        className="home--welcomeContainer--buttonContainer--button"
                        href={welcomeData.githubLink}
                    >
                        {welcomeData.github[lan]}
                    </a>
                </div>
            </div>
            : <ClipLoader />
    )
}