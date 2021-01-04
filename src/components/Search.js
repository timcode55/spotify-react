import React, { Component, useState } from 'react';
import { fetchSearch } from '../actions/albumsAction';
import { useDispatch } from 'react-redux';

const Search = () => {
	const dispatch = useDispatch();
	const [ query, setQuery ] = useState('');

	const updateArtist = (e) => {
		setQuery(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			searchArtist();
		}
	};

	const searchArtist = () => {
		dispatch(fetchSearch(query));
	};
	console.log('Search 22', query);
	return (
		<div>
			<input
				type="text"
				value={query}
				onChange={updateArtist}
				onKeyPress={handleKeyPress}
				placeholder="Search for an Artist"
			/>
			<button onClick={searchArtist}>Search</button>
		</div>
	);
};

export default Search;
