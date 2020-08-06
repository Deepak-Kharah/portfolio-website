import React from "react";

import kheti_tile from "../../static/kheti_ui_sketch.webp";
import pastelibrary_tile from "../../static/paste_library_ui_sketch.webp";
import sikkim_sis_tile from "../../static/sikkim_sis_ui_sketch.webp";
import classmate_tile from "../../static/classmate_ui_sketch.webp";

import ProjectTile from "../lists/ProjectTile";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <header>
                    <h1>Projects</h1>
                </header>
                <ProjectTile
                    project_name="Sikkim S.I.S"
                    project_desc="We have developed the Sikkim School Information System for the Government of Sikkim. We developed this project for the Smart India Hackathon 2020. This project aimed to create a school information system that can work reliably with the unstable network connection in the state of Sikkim. This project is 100% compliant with the UDISE+ application that is developed and maintained by MHRD. Our project will help the Government of Sikkim to fetch the statutory data of the schools on demand and use in-build advanced statistics to streamline their analysis for the decision making process. This project was a group project. My role was to develop a subject wise attendance system for students, daily attendance system for the employees, employee management system for both teaching and non-teaching staff and, co-present the project during the finale. Tech stack includes Python, Django, Bootstrap, AWS and PostgreSQL."
                    project_tile_image={sikkim_sis_tile}
                />
                <br />
                <ProjectTile
                    project_name="Paste Library"
                    project_desc="Paste library is a web-based paste bin like service that allows users to paste and share text. I made this app to explore the MERN stack. During the development, I learned how to generate and map a short URL to a set of data with the least collision. The aim was to achieve maximum convenience and privacy. So, the metric used was to complete the entire process within just two clicks."
                    project_tile_image={pastelibrary_tile}
                    repo_link="https://github.com/Deepak-Kharah/paste-library-mern"
                    live_link="https://pastelibrary.tk"
                />
                <br />
                <ProjectTile
                    project_name="Classmate"
                    project_desc="We created the Classmate project for the V.C.E.T Hackathon 2019. The aim was to develop a robust eco-system of microservices targeted for students. The Classmate was a team project. My role was to designed and develop a marketplace for the students to allow them to trade stationaries they no longer require and manage the presentation during the final Judging round."
                    project_tile_image={classmate_tile}
                />
                <br />
                <ProjectTile
                    project_name="KH-e-TI"
                    project_desc="Kh-e-ti is a web-based application build on the Django framework. This application let the farmers hire a tractor as well as other mechanizations at a nominal price using just their mobile device. We showcase this project as our second year Python mini project. We also took this project to the VNPS 2019 and won the competition."
                    project_tile_image={kheti_tile}
                    repo_link="https://github.com/Deepak-Kharah/Kh-e-ti"
                    // live_link="https://kheti.cf"
                />
            </div>
        </section>
    );
}
