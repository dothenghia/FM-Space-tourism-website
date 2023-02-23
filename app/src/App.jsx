import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'

const App = () => {
	return (
		<div id='app'>
			<Header/>

			<Routes>
				<Route path='/' 		   element={<Home/>}/>
				<Route path='/destination' element={<Destination/>}/>
				<Route path='/crew' 	   element={<Crew/>}/>
				<Route path='/technology'  element={<Technology/>}/>
				<Route path='*' 		   element={<Home/>}/>
			</Routes>
		</div>
	);
};

export default App;
