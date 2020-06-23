import React, { Fragment } from "react";
import GetBook from "./GetBooks";
import Navbar from "./Navbar";

function App() {
	return (
		<Fragment>
			<Navbar />
			<div className="flex content-end flex-wrap h-screen pt-20">
				<div className="lg:w-1/3  p-2"></div>
				<div className="lg:w-1/3 w-full  h-full mx-5 ">
					<GetBook />
				</div>
				<div className="lg:w-1/3  p-2"></div>
			</div>
		</Fragment>
	);
}

export default App;
