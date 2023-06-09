import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({filterGreased, setFilterGreased}) => {

	function handleFilterGreased() {
		setFilterGreased((prevGreasedStatus) => !prevGreasedStatus);
	}

	const btnText = filterGreased ? 'Unfilter By Greased' : 'Filter By Greased';

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={handleFilterGreased}>{btnText}</button>
			<select>
				<option>Sort By Name</option>
				<option>Sort By Weight</option>
			</select>
		</div>
	);
};

export default Nav;
