import React, { useState, useRef, Fragment } from "react";
import BookList from "./BookList";

export default function GetBook() {
	const inputRef = useRef();
	const [loading, setLoading] = useState(false);
	const [bookList, setBookList] = useState("");

	async function handleClick(e) {
		e.preventDefault();
		const name = inputRef.current.value;
		if (!name) {
			return null;
		} else {
			const list = await getBooksFromAPI(name);
			setBookList(list);
			console.log(bookList);
		}
	}

	async function getBooksFromAPI(q) {
		setLoading(true);
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		try {
			let response = await fetch(
				proxyurl + `https://intense-retreat-68884.herokuapp.com/get-books/${q}`
			);
			let json = await response.json();
			setLoading(false);

			return json;
		} catch (error) {
			console.error(error);
		}
	}
	function Loading() {
		return loading ? (
			<div className="w-full rounded overflow-hidden shadow-xl mt-3 mb-3 p-2">
				<div className=" m-6 text-lg text-justify">
					<div className="inline-flex">
						<h1 className="text-gray-700 text-center   font-bold">
							HANG ON!!{" "}
						</h1>
						<p className=" text-gray-600">this may take some time</p>
					</div>
				</div>
			</div>
		) : null;
	}
	return (
		<Fragment>
			<form className="">
				<div className="flex items-center border-b border-b-2 border-teal-500 py-2 max-w-full">
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Hey there, need some books?"
						aria-label="Full name"
						ref={inputRef}
					/>

					<button
						className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
						type="submit"
						onClick={handleClick}
					>
						Find
					</button>
				</div>
			</form>
			{loading ? <Loading /> : <BookList data={bookList} />}
		</Fragment>
	);
}
