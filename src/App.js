import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact'

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path={`/`} exact={true} component={Home} />
				<Route path={`/contact`} exact={true} component={Contact}/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
