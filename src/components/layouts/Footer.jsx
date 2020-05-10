import React from 'react';

import logo from '../../static/logo.svg';

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
						<nav>
							<a href="#overview">Overview</a>
							<a href="#projects">Projects</a>
							<a href="#mentions">Mentions</a>
							<a href="#contact">Contact</a>
							<a href="#!">Resumé</a>
						</nav>
					</div>
				</div>
			</div>

			<div className="other-info">
				<div className="content">
					<p id="copyright">
						{' '}
						<span className="txt-primary"> © {new Date().getFullYear()}</span> Deepak Kharah. All rights
						reserved.
					</p>
					<p>
						<span className="txt-primary">Designed by</span> Deepak Kharah.
					</p>
				</div>
			</div>
		</footer>
	);
}
