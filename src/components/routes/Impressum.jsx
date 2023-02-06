import { ClipLoader } from "react-spinners"
import BlockContent from "@sanity/block-content-to-react"
import { PortableText } from "@portabletext/react"

import Navbar from "../navbar/Navbar"

export default function Impressum({ text, lan }) {
    return (
        text ?
            <section className="impressum site">
                <Navbar />
                <h1 className="impressum--heading">Impressum</h1>
                <article className="impressum--textContainer">
                    <PortableText
                        value={lan === 0 ? text.text_de : text.text_en}
                    // projectId={import.meta.env.VITE_SANITY_PROJECT_ID}
                    // dataset="production"
                    />
                </article>
            </section>
            : <ClipLoader />
    )
}