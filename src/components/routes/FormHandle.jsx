import { useLocation, Link } from "react-router-dom"

const FormHandle = () => {
    const locationState = useLocation().state
    // console.log(locationState)

    return (
        <section className="formHandle site">
            {
                locationState.wasOk
                    ?
                    <p className="formHandle--message">
                        Danke für ihre Nachricht {locationState.formData.anrede} {locationState.formData.name}.
                        Ich versuche mich so schnell wie möglich bei Ihnen zurück zu melden.
                    </p>
                    :
                    <p className="formHandle--message">
                        Entschuldigung, da ist wohl etwas schief gelaufen.
                        Bitte probieren Sie es mit einem Anruf.<br />
                    </p>
            }
            <Link className="formHandle--backLink" to={"/"}>Zurück zur Startseite</Link>
        </section>
    )
}

export default FormHandle