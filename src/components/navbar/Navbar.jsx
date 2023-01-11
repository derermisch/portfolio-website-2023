import { useContext } from "react"

import { SettingsContext } from "../general/SettingsContext"
import { DataSource, getServerData } from "../general/DataSource"
import Navlinks from "./Navlinks"

export default function () {
    const value = useContext(SettingsContext).value

    return (
        <nav className="nav">
            <DataSource
                getDataFunc={getServerData('*[_type == "nav"].navlink[]{ navlink,link}')}
                resourceName="navlinkData"
            >
                <Navlinks lan={value} />
            </DataSource>
        </nav>
    )
}