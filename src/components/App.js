import React, { useState } from "react";
import Nav from "./Nav";
import HogArea from './HogArea';
import FormArea from './FormArea';

import hogs from "../porkers_data";

function App() {
	console.log(hogs)

	const [filterGreased, setFilterGreased] = useState(false);
	const [sortFilter, setSortFilter] = useState('Unsorted');
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs);

	const filteredHogs = hogsToDisplay.filter((hog) => filterGreased ? hog.greased : true);
	let unsortedHogs = null;


	function compareByName(a, b) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	}

	function compareByWeight(a, b) {
		if (a.weight < b.weight) {
			return -1;
		}
		if (a.weight > b.weight) {
			return 1;
		}
		return 0;
	}

	if (sortFilter === 'Unsorted') {
		unsortedHogs = [...filteredHogs];
	} else if (sortFilter === 'Sort By Name') {
		filteredHogs.sort(compareByName);
	} else if (sortFilter === 'Sort By Weight') {
		filteredHogs.sort(compareByWeight);
	}

	function addHog(newHog) {
		console.log(newHog)
		setHogsToDisplay([...hogsToDisplay, newHog]);
	}

	return (
		<div className="App">
			<Nav
				filterGreased={filterGreased}
				setFilterGreased={setFilterGreased}
				setSortFilter={setSortFilter}
			/>
			<HogArea hogs={sortFilter === 'Unsorted' ? unsortedHogs : filteredHogs } />

			<FormArea addHog={addHog}/>
		</div>
	);
}

export default App;
