import { Link } from "react-router-dom"
import { GrHome, GrBusinessService, GrContact, GrMap } from "react-icons/gr"
import { HiBars3 } from "react-icons/hi2"
import ClipLoader from "react-spinners/ClipLoader"

import { scrollToLocation } from "../../utils/utils"
import { MakeImgButton } from "../general/MakeImgButton"
import MakeAutomaticNavbar from "../general/MakeAutomaticNavbar"

export default function Navlinks({ navlinkData, lan }) {
    const toggleNavMenu = () => { //hacky solution
        document.querySelector(".hamburgerContainer").children[0].classList.toggle("openHamburger")
        document.querySelector(".nav--links").classList.toggle("openNav")
    }

    // make navbar, the links are mapped from the received data
    return (
        navlinkData ?
            <MakeAutomaticNavbar className="nav--links" backHomeText={lan === 0 ? "Zurück zur Startseite": "Back to home"}>
                {navlinkData.map((data, i) => {
                    // Imgbutton, in case i want to add svgs for the links at one point
                    return <MakeImgButton key={i}>
                        {data.link ?
                            <a
                                className="nav--links--link"
                                href={data.link}
                            >
                                {data.navlink[lan]}
                            </a>
                            :
                            <a
                                className="nav--links--link"
                                onClick={() => scrollToLocation(i, toggleNavMenu)}
                            >
                                {data.navlink[lan]}
                            </a>
                        }
                    </MakeImgButton>
                })}
            </MakeAutomaticNavbar>
            : <ClipLoader />
    )
}
