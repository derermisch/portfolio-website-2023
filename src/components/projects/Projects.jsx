import { useInView } from "react-intersection-observer"

import ProjectContainer from "./ProjectContainer"
import { DataSource, getServerData } from "../general/DataSource"
import Heading from "../general/Heading"

export default function Projects() {
    const { ref, inView, entry } = useInView({
        threshold: 0.1
    })

    return (
        <section className="projects" ref={ref}>
            <DataSource
                getDataFunc={getServerData('*[_type == "projectsite"][0].heading')}
                resourceName="headingArr"
            >
                <Heading className="projects--heading" />
            </DataSource>

            <DataSource
                getDataFunc={getServerData('*[_type == "projectsite"][0].projectsArray[]{"imgUrl": projectImg.asset->url, projectLiveLink, projectGithubLink, projektHeading}')} resourceName="projects"
            >
                <ProjectContainer projectsInView={inView} />
            </DataSource>
        </section>
    )
}