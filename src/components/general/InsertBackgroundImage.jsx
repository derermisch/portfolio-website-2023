import { useLocation } from "react-router-dom"

import backgroundImg from "../../assets/Shutterstock_72898453_full.png"

export default function InsertBackgroundImage() {
    const location = useLocation().pathname

    return (
        (location === "/") && <img className="backgroundImg" src={backgroundImg} alt="" />
    )
}