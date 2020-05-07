import React from 'react';

export default function MentionTimelineTile({ date, title, desc }) {
	return (
		<div>
			<h2>
				{date} • {title}
			</h2>

			<p>{desc}</p>
		</div>
	);
}
