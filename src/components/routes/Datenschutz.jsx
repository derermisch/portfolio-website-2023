// import BlockContent from "@sanity/block-content-to-react"
import { PortableText } from "@portabletext/react"
import { ClipLoader } from "react-spinners"

import Navbar from "../navbar/Navbar"

export default function Datenschutz({ text, lan }) {
    return (
        text ?
            <section className="datenschutz site">
                <Navbar />
                <h2 className="datenschutz--heading">{lan === 0 ? "Datenschutz" : "Data protection"}</h2>
                {lan > 0 && <p className="datenschutz--lanDisclaimer">This is a translated version and might contain translation errors. To see the original version, please switch language to "DE" (german).</p>}
                <article className="datenschutz--textContainer">
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