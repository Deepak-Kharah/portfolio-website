import React from 'react';

export default function SkillCard({ title }) {
	return (
		<div className="skill-card">
			<header>
				<h3>{title}</h3>
			</header>
			<ul>
				<li>Python</li>
				<li>Javascript</li>
				<li>C++</li>
			</ul>
		</div>
	);
}
