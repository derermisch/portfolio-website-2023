import { useContext } from "react"

import { DataSource, getServerData } from "../general/DataSource"
import { SettingsContext } from "../general/SettingsContext"
import Navbar from "../navbar/Navbar"
import WelcomeContainer from "./WelcomeContainer"
import HeadingContainer from "./HeadingContainer"

export default function Home() {
    const value = useContext(SettingsContext).value

    return (
        <section className="home">
            <Navbar />

            <DataSource
                getDataFunc={getServerData('*[_type == "home"][0].heading')}
                resourceName="heading">
                <HeadingContainer lan={value}/>
            </DataSource>

            <DataSource
                getDataFunc={getServerData('*[_type == "home"][0]{"imgUrl": img.asset->url, contact, github, githubLink}')}
                resourceName="welcomeData">
                <WelcomeContainer lan={value}/>
            </DataSource>
        </section>
    )
}