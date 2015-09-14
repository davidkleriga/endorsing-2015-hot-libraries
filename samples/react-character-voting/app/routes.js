import React from 'react';
import { Route } from 'react-route';
import TutorialApplication from './components/tutorial';
import Home from './components/home';

export default {
	<Route handler={TutorialApplication}>
		<Route path='/' handler={Home} />
	</Route>
}