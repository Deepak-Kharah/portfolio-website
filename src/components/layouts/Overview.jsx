import React from 'react';

export default function Overview() {
	return (
		<section id="overview">
			<div className="container">
				<header>
					<h1>Overview</h1>
				</header>
				<p>
					My development journey is continuing since I wrote my first code in 2015. I aim to write a
					human-comprehensible code. You know your writing is elegant when not only a machine but a human can
					understand it completely. This principle helps me to develop and debug software swiftly and
					efficiently. I work primarily using python and Django framework. But I can also use the MERN stack
					whenever required.
				</p>

				<div id="skills">
					<h2>Skills</h2>
					<div className="skill-cards">
						<div className="skill-card">
							<header>
								<h3>languages</h3>
							</header>
							<ul>
								<li>Python</li>
								<li>Javascript</li>
								<li>C++</li>
							</ul>
						</div>

						<div className="skill-card">
							<header>
								<h3>framework</h3>
							</header>
							<ul>
								<li>Django</li>
								<li>React</li>
							</ul>
						</div>

						<div className="skill-card">
							<header>
								<h3>tools</h3>
							</header>
							<ul>
								<li>Git</li>
								<li>GitHub</li>
								<li>Bitbucket</li>
							</ul>
						</div>

						<div className="skill-card">
							<header>
								<h3>database</h3>
							</header>
							<ul>
								<li>MongoDb</li>
								<li>PostrgreSql</li>
								<li>MySql</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
