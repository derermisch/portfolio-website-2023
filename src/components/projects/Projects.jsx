import { useInView } from "react-intersection-observer"

import ProjectsHeading from "./ProjectsHeading"
import ProjectContainer from "./ProjectContainer"
import { DataSource, getServerData } from "../general/DataSource"
import { useEffect } from "react"

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
                <ProjectsHeading />
            </DataSource>

            <DataSource
                getDataFunc={getServerData('*[_type == "projectsite"][0].projectsArray[]{"imgUrl": projectImg.asset->url, projectLiveLink, projectGithubLink, projektHeading}')} resourceName="projects"
            >
                <ProjectContainer projectsInView={inView} />
            </DataSource>
        </section>
    )
}