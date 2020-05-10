import React from 'react';

import logo from '../../static/logo.svg';

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="name-logo">
					<div className="logo">
						<img src={logo} alt="Deepak Kharah's logo" />
					</div>
					<h1>
						Deepak <span>Kharah</span>
					</h1>
					<p>Full stack developer who writes beautiful codes.</p>
				</div>
				<nav>
					<a href="#overview">Overview</a>
					<a href="#projects">Projects</a>
					<a href="#mentions">Mentions</a>
					<a href="#contact">Contact</a>
					<a href="#!">Resumé</a>
				</nav>
			</div>

			<div className="other-info">
				<p id="copyright">
					{' '}
					<span className="txt-primary"> © {new Date().getFullYear()}</span> Deepak Kharah. All rights
					reserved.
				</p>
				<p>
					<span className="txt-primary">Designed by</span> Deepak Kharah.
				</p>
			</div>
		</footer>
	);
}
