import React from "react";

export default function ProjectTile({
    project_tile_image,
    project_name,
    repo_link,
    live_link,
    project_desc,
}) {
    return (
        <div className="project-tile">
            <div className="visual">
                <div className="tile-img">
                    <img
                        src={project_tile_image}
                        alt={`${project_name} ui sketch`}
                    />{" "}
                </div>
                <br />
                <div className="btn-grp">
                    {repo_link ? (
                        <a
                            className="btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={repo_link}
                        >
                            Review Code
                        </a>
                    ) : (
                        <p>CLOSED SOURCE</p>
                    )}

                    {live_link ? (
                        <a
                            className="btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={live_link}
                        >
                            View Live
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="text">
                <h1>{project_name}</h1>
                <p>{project_desc}</p>
            </div>
        </div>
    );
}
