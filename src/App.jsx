import { Routes, Route } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import client from "./client"
import imgUrlBuilder from "@sanity/image-url"

import { DataSource, getServerData } from "./components/general/DataSource"
import Sites from "./components/routes/Sites"
import Datenschutz from "./components/routes/Datenschutz"
import Impressum from "./components/routes/Impressum"
import FormHandle from "./components/routes/FormHandle"
import { SettingsContext } from "./components/general/SettingsContext"
import { getCurrentLanguage } from "./utils/language"
import SettingsToggle from "./components/general/SettingsToggle"
import { setCurrentLightMode } from "./utils/darkmode"
import Footer from "./components/footer/Footer"

export default function App() {
    //0 is german, 1 is english. This way it can be used as an index directly
    //todo for colorMode: change the variables of the css file: primary->secondary, secondary->primary
    // const [value, setValue] = useState(() => (window.navigator.language.slice(0, 2) === "de") ? 0 : 1)
    const [value, setValue] = useState(() => getCurrentLanguage())
    const providerValue = useMemo(() => ({ value, setValue }), [value, setValue])

    useEffect(() => {
        setCurrentLightMode()
    }, [])

    return (
        <>
            <SettingsContext.Provider value={providerValue}>
                <SettingsToggle />
                <Routes>
                    <Route path="/" element={<Sites />} />

                    <Route path="/datenschutz" element=
                        {
                            <DataSource getDataFunc={getServerData('*[_type == "datenschutz"][0]{text_de, text_en}')} resourceName={"text"}>
                                <Datenschutz lan={value} />
                            </DataSource>
                        }
                    />

                    <Route path="/impressum" element=
                        {
                            <DataSource getDataFunc={getServerData('*[_type == "impressum"][0]{text_de, text_en}')} resourceName={"text"}>
                                <Impressum lan={value} />
                            </DataSource>
                        }
                    />

                    <Route path="/formHandle" element=
                        {
                            <DataSource getDataFunc={getServerData('*[_type == "contact"][0]{reqSuccess, reqFail}')} resourceName={"requestInfo"}>
                                <FormHandle lan={value} />
                            </DataSource>
                        }
                    />
                </Routes>

                <DataSource
                    getDataFunc={getServerData('*[_type == "nav"].navlink[]{ navlink,link}')}
                    resourceName="navlinkData"
                >
                    <Footer lan={value} />
                </DataSource>
            </SettingsContext.Provider>

            {/* <Footer /> */}
        </>
    )
}
