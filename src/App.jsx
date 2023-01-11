import { Routes, Route } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import client from "./client"
import imgUrlBuilder from "@sanity/image-url"

import { DataSource, getServerData } from "./components/general/DataSource"
import Sites from "./components/routes/Sites"
import Datenschutz from "./components/routes/Datenschutz"
import Impressum from "./components/routes/Impressum"
import Footer from "./components/footer/Footer"
import FormHandle from "./components/routes/FormHandle"
import { SettingsContext } from "./components/general/SettingsContext"
import { getCurrentLanguage } from "./utils/language"
import SettingsToggle from "./components/general/SettingsToggle"
import { setCurrentLightMode } from "./utils/darkmode"

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
                            <DataSource getDataFunc={getServerData('*[_type == "datenschutz"][0].text')} resourceName={"text"}>
                                <Datenschutz />
                            </DataSource>
                        }
                    />

                    <Route path="/impressum" element=
                        {
                            <DataSource getDataFunc={getServerData('*[_type == "impressum"][0].text')} resourceName={"text"}>
                                <Impressum />
                            </DataSource>
                        }
                    />

                    <Route path="/formHandle" element={<FormHandle />} />
                </Routes>
            </SettingsContext.Provider>

            {/* <Footer /> */}
        </>
    )
}
