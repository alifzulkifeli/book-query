import React, { useState, Fragment } from "react";

const BookList = ({ data }) => {
	const [collapse, setCollapse] = useState(false);
	const [collapse2, setCollapse2] = useState(false);

	function handleCollapse() {
		setCollapse(!collapse);
	}
	function handleCollapse2() {
		setCollapse2(!collapse2);
	}
	function ResultCard() {
		return (
			<div className="w-full rounded overflow-hidden shadow-xl mt-3 mb-3 p-2">
				<div className=" m-6 text-lg text-justify">
					<div className="inline-flex">
						<button
							onClick={handleCollapse}
							className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
						>
							show {data.pdfdrive.length} book(s)
						</button>
						<h1 className=" text-center  py-1 px-2">From PDFDRIVE</h1>
					</div>
				</div>
				{collapse &&
					data.pdfdrive.map((el, i) => {
						return (
							<div className="w-full rounded overflow-hidden shadow-lg mt-3 mb-3 p-2 bg-gray-200">
								<a href={el.link}>
									<h1 className="text-gray-700 text-base">{el.name}</h1>
									<div className=" p-3 text-gray-600 text-base">
										<p>page: {el.page}</p>
										<p>file size: {el.size}</p>
									</div>
								</a>
							</div>
						);
					})}
			</div>
		);
	}

	function ResultCard2() {
		return (
			<div className="w-full rounded overflow-hidden shadow-xl mt-7 mb-3 p-2">
				<div className=" m-6 text-lg text-justify">
					<div className="inline-flex">
						<button
							onClick={handleCollapse2}
							className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
						>
							show {data.pdfdrive.length} book(s)
						</button>
						<h1 className=" text-center  py-1 px-2">From BOOKFI</h1>
					</div>
				</div>
				{collapse2 &&
					data.bookFi.map((el, i) => {
						return (
							<div className="w-full rounded overflow-hidden shadow-lg mt-3 mb-3 p-2 bg-gray-200">
								<a href={el.link}>
									<h1 className="text-gray-700 text-base">{el.name}</h1>
									<div className=" p-3 text-gray-600 text-base">
										<p>author: {el.author}</p>
										<p>file size and language: {el.sizeAndLang}</p>
										<p>file type: {el.fileType}</p>
									</div>
								</a>
							</div>
						);
					})}
			</div>
		);
	}
	// } else {
	return data ? (
		<Fragment>
			<ResultCard />
			<ResultCard2 />
		</Fragment>
	) : null;
	// }
};

export default BookList;
