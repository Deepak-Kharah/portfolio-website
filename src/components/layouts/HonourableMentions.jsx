import React from 'react';

import MentionTimelineTile from '../lists/MentionTimelineTile';

export default function HonourableMentions() {
	return (
		<section id="mentions">
			<div className="container">
				<header>
					<h1>Mentions</h1>
				</header>

				<MentionTimelineTile
					title="SIH Shortlised team"
					desc="We were among the shortlisted team seleted to compete in the final rounds of Smart India Hackathon."
					date="2020 February"
				/>
			</div>
		</section>
	);
}
