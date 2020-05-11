import React from 'react';

import kheti_tile from '../../static/kheti_ui_sketch.webp';
import pastelibrary_tile from '../../static/paste_library_ui_sketch.webp';

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
					project_tile_image={kheti_tile}
					repo_link="https://github.com/Deepak-Kharah/Kh-e-ti"
					live_link="https://kheti.cf"
				/>
				<br />
				<ProjectTile
					project_name="Paste Library"
					project_desc="Paste library is a web-based paste bin like service that allows users to paste and share text. I made this app to explore the MERN stack. During the development, I learned how to generate and map a short URL to a set of data with the least collision. The aim was to achieve maximum convenience and privacy. So, the metric used was to complete the entire process within just two clicks."
					project_tile_image={pastelibrary_tile}
					repo_link="https://github.com/Deepak-Kharah/paste-library-mern"
					live_link="https://pastelibrary.tk"
				/>
			</div>
		</section>
	);
}
