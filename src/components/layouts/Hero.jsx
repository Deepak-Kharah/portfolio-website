import React from 'react';

export default function Hero() {
	return (
		<section id="hero">
			<div className="container">
				<div className="content">
					<h1 className="txt-white">
						Hello. I am<br />
						<span className="txt-primary">Deepak Kharah.</span>
					</h1>
					<h3>
						A <span>full stack developer </span> who writes beautiful codes.
					</h3>
					<div>
						<a className="btn-primary" href="#contact">
							Let's Talk
						</a>
					</div>
				</div>
				<div className="logo" />
			</div>
		</section>
	);
}
