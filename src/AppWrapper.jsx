import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"

import App from "./App"

export default function AppWrapper() {
    const [allLoaded, setAllLoaded] = useState(() => false)

    useEffect(() => {

        const onPageLoad = () => {
            setAllLoaded(true)
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, [])

    return (
        <>
            {!allLoaded && <div className="loaderWrapper">
                <ClipLoader className="loaderWrapper--loader" />
            </div>}
            <App />
            {/* {allLoaded && <InsertBackgroundImage/>} */}
        </>

    )
}