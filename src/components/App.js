import React, { useState } from "react";
import Nav from "./Nav";
import HogArea from './HogArea';
import FormArea from './FormArea';

import hogs from "../porkers_data";

function App() {

const [filterGreased, setFilterGreased] = useState(false);

const filteredHogs = hogs.filter((hog) => filterGreased ? hog.greased : true);

console.log('filteredHogs', filteredHogs)

	return (
		<div className="App">
			<Nav filterGreased={filterGreased} setFilterGreased={setFilterGreased}/>
			<HogArea hogs={filteredHogs} />
			<FormArea />
		</div>
	);
}

export default App;
