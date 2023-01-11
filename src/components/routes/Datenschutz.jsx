// import BlockContent from "@sanity/block-content-to-react"
import { PortableText } from "@portabletext/react"
import { ClipLoader } from "react-spinners"

import Navbar from "../navbar/Navbar"

export default function Datenschutz({ text }) {
    return (
        text ?
            <section className="datenschutz site">
                <Navbar />
                <h1 className="datenschutz--heading">Datenschutz</h1>
                <article className="datenschutz--textContainer">
                    <PortableText
                        value={text}
                    // projectId={import.meta.env.VITE_SANITY_PROJECT_ID}
                    // dataset="production"
                    />
                </article>
            </section>
            : <ClipLoader />
    )
}