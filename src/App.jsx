import React from 'react';

import Navbar from './components/layouts/Navbar';
import Hero from './components/layouts/Hero';
import Overview from './components/layouts/Overview';
import Projects from './components/layouts/Projects';
import Convinced from './components/layouts/Convinced';
import HonourableMentions from './components/layouts/HonourableMentions';
import Contact from './components/layouts/Contact';
import Footer from './components/layouts/Footer';

import './App.scss';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Overview />
			<Projects />
			<Convinced />
			<HonourableMentions />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
