import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path={`/`} exact={true} component={Home} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;