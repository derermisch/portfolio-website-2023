import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { scrollToLocation } from "../../utils"
import ScrollUpButton from "./ScrollUpButton"

export default function Footer() {
    const location = useLocation().pathname
    const [showHomeNavigation, setShowHomeNavigation] = useState(() => false)

    useEffect(() => {
        if (location !== "/") {
            setShowHomeNavigation(false)
        } else {
            setShowHomeNavigation(true)
        }
    }, [location])

    return (
        <>
            <ScrollUpButton />
            <section className="footer">
                {
                    showHomeNavigation ?
                        <div className="footer--navigation">
                            <h2 className="footer--navigation--heading">Navigation</h2>
                            <a onClick={() => scrollToLocation(0)}>Startseite</a>
                            <a onClick={() => scrollToLocation(1)}>Angebote</a>
                            <a onClick={() => scrollToLocation(2)}>Kontakt</a>
                            <a onClick={() => scrollToLocation(3)}>Anfahrt</a>
                        </div>
                        : <Link to={"/"}>Zurück zur Startseite</Link>
                }

                <div className="footer--rechtliches">
                    <h2 className="footer--rechtliches--heading">Rechtliches</h2>
                    <Link to={"/impressum"}>Impressum</Link>
                    <Link to={"/datenschutz"}>Datenschutzerklärung</Link>
                </div>
            </section>
        </>
    )
}