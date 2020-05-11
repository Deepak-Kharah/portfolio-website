import React from 'react';

export default function SkillCard({ title, skills }) {
	return (
		<div className="skill-card">
			<header>
				<h3>{title}</h3>
			</header>
			<ul>
				{skills.map((skill) => {
					return <li>{skill}</li>;
				})}
			</ul>
		</div>
	);
}
