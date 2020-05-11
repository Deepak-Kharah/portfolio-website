import React from 'react';

import desk from '../../static/desk_ill.webp';
import SkillCard from '../lists/SkillCard';

export default function Overview() {
	return (
		<section id="overview">
			<div className="container">
				<header>
					<h1>Overview</h1>
				</header>

				<div className="bio">
					<p>
						My development journey is continuing since I wrote my first code in 2015. I aim to write a
						human-comprehensible code. You know your writing is elegant when not only a machine but a human
						can understand it completely. This principle helps me to develop and debug software swiftly and
						efficiently. I work primarily using python and Django framework. But I can also use the MERN
						stack whenever required.
					</p>
					<div className="desk-ill">
						<img src={desk} alt="" />
					</div>
				</div>

				<div id="skills">
					<h2>Skills</h2>
					<div className="skill-cards">
						<SkillCard title="languages" skills={[ 'Python', 'JavaScript', 'C++' ]} />
						<SkillCard title="framework" skills={[ 'Django', 'React' ]} />
						<SkillCard title="tools" skills={[ 'Git', 'GitHub', 'BitBucket' ]} />
						<SkillCard title="database" skills={[ 'MongoDb', 'PostgreSql', 'MySql' ]} />
					</div>
				</div>
			</div>
		</section>
	);
}
