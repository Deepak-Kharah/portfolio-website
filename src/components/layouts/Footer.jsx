import React from 'react';

import logo from '../../static/logo.webp';
import resume from '../../static/resume_img.pdf';

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="main-footer">
					<div className="name-logo">
						<div className="logo">
							<img src={logo} alt="Deepak Kharah's logo" />
						</div>
						<h1>
							Deepak <span>Kharah</span>
						</h1>
						<p>A full-stack developer who writes beautiful code.</p>
					</div>
					<div className="quick-links">
						<h2>Quick links</h2>
						<nav aria-label="Main">
							<a href="#overview">Overview</a>
							<a href="#projects">Projects</a>
							<a href="#mentions">Mentions</a>
							<a href="#contact">Contact</a>
							<a
								href={resume}
								target="_blank"
								rel="noopener noreferrer"
								download="Deepak_Kharah_resume_img"
							>
								Resume
							</a>
						</nav>
					</div>
				</div>
			</div>

			<div className="other-info">
				<div className="content">
					<p id="copyright">
						{' '}
						<span> © {new Date().getFullYear()}</span> Deepak Kharah. All rights reserved.
					</p>
					<p>
						<span>Designed and Developed</span> with <span>♡</span> by Deepak Kharah.
					</p>
				</div>
			</div>
		</footer>
	);
}
