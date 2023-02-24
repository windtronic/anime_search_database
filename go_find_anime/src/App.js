import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {
	
	const [animeList, SetAnimeList] = useState([])	
	const [search, setSearch] = useState([])
	
	
	
	
	
	return (
		<div className="App">
			<Nav />
	        <Header />
			<Main />
		</div>
	);
}

export default App;
