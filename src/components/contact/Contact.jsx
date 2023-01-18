import { DataSource, getServerData } from "../general/DataSource"
import Formular from "./Formular"
import Heading from "../general/Heading"

export default function Contact() {
    return (
        <section className="contact">
            <DataSource
                getDataFunc={getServerData('*[_type == "contact"][0].heading')}
                resourceName="headingArr"
            >
                <Heading />
            </DataSource>

            <DataSource
                getDataFunc={getServerData('*[_type == "contact"][0]{email, lawText, message, name, sendMessage}')}
                resourceName="dataForForm"
            >
                <Formular />
            </DataSource>
        </section>
    )
}