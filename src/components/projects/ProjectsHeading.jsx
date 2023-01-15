import { useContext } from "react"
import { ClipLoader } from "react-spinners"

import { SettingsContext } from "../general/SettingsContext"

export default function ProjectsHeading({ headingArr }) {
    const { value } = useContext(SettingsContext)

    return (
        headingArr ?
            <h1 className="projects--heading">{headingArr[value]}</h1>
            : <ClipLoader />
    )
}