import React from 'react';

import ProjectTile from '../lists/ProjectTile';

export default function Projects() {
	return (
		<section id="projects">
			<div className="container">
				<header>
					<h1>Projects</h1>
				</header>
				<ProjectTile
					project_name="KH-e-TI"
					project_desc="Kh-e-ti is a web-based application build on the Django framework. This application let the farmers hire a tractor as well as other mechanizations at a nominal price using just their mobile device. We showcase this project as our second year Python mini project. We also took this project to the VNPS 2019 and won the competition."
					project_tile_image="../../static/kheti_ui_sketch.svg"
					repo_link="github.com/dkfj"
					live_link="https://kheti.cf"
				/>
			</div>
		</section>
	);
}
