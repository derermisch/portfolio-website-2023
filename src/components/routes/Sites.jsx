import Home from "../home/Home"
import Projects from "../projects/Projects"
import AboutMe from "../abouteMe/AboutMe"

export default function Sites() {
    return (
        <main className="sites">
            <Home />
            <Projects />
            <AboutMe />
        </main>
    )
}