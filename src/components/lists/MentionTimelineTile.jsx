import React from 'react';

export default function MentionTimelineTile({ date, title, desc }) {
	return (
		<div className="mention-timeline-element">
			<h2>
				{date} <span className="txt-primary">•</span> {title}
			</h2>

			<p>{desc}</p>
		</div>
	);
}
