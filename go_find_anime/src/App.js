import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import React from 'react'


function App() {
	

	return (
		<div className="App">
		    <Header />
			<Main main={<main/>}/>
		
		</div>
	);
}

export default App;
