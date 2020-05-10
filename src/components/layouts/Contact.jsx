import React from 'react';

export default function Contact() {
	return (
		<section id="contact">
			<div className="container">
				<header>
					<h1>Get in Touch</h1>
				</header>
				<q>Good communication is just as stimulating as black coffee, and just as hard to sleep after.</q>

				<p>
					<cite>-Anne Morrow Lindbergh </cite>
				</p>
				<div className="social-links">
					<a
						title="LinkedIn"
						href="https://linkedin.com/in/deepakkharah"
						rel="noopener noreferrer"
						target="_blank"
					>
						<i className="fab fa-linkedin" />
					</a>
					<a
						title="GitHub"
						href="https://github.com/Deepak-Kharah/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<i className="fab fa-github" />
					</a>
				</div>

				<a href="mailto:me@deepakkharah.com">me@deepakkharah.com</a>
			</div>
		</section>
	);
}
