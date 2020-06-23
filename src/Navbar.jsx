import React, { Fragment } from "react";
import { FiTwitter } from "react-icons/fi";

export default function Navbar() {
	return (
		<Fragment>
			<ul class="flex">
				<li class="mr-3">
					<a
						class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
						href="mailto:alifzulkifeli@gmail.com"
					>
						What!! a bug?
					</a>
				</li>
				<li class="mr-3">
					<a
						class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-2"
						href="https://twitter.com/alifzulkifeli_"
					>
						<FiTwitter size="1.5em" />
					</a>
				</li>
			</ul>
		</Fragment>
	);
}
