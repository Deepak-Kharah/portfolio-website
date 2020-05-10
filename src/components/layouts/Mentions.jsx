import React from 'react';

import MentionTimelineTile from '../lists/MentionTimelineTile';

export default function Mentions() {
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
				<MentionTimelineTile
					title="VCET Hackathon 2019 finalist"
					desc="VCET Hackathon is an annual hackathon competition held at Vidyavardhini’s College of Engineering and Technology. I participated in this Hackathon with three of my other friends. The rules differed slightly from previous years. This year the organisers decided the topics for the participants. This code sprint lasted for thirty hours, during which we developed an application named Classmate. After three jury rounds, we were amongst the top 10 teams to qualify for the final judging round. The last round was the pitching round, where we shared our inspiration, workflow and the future of the Classmate. In the event conclusion, our team was in the fourth position amongst all the 45+ participants."
					date="2019 September"
				/>
				<MentionTimelineTile
					title="Winner of VNPS 2019"
					desc="VNPS is the annual competition held by all the departmental committees in unison in Vidyavardhini's college of Engineering and Technology. We presented project Kh-e-ti in the event, which is a tractor renting service for the farmers."
					date="2019 April"
				/>
			</div>
		</section>
	);
}
