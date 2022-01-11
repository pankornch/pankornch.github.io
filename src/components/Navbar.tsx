import React, { FC } from "react"

const Navbar:FC = () => {
	return (
		<nav className="flex justify-between items-center fixed top-0 left-0 w-screen px-6 py-6 bg-white shadow-lg z-50">
			<h1 className="font-bold text-4xl">Pankorn</h1>
			<ul className="sm:ml-36 ml-0 flex w-full sm:justify-between justify-end">
				{/* <li className="cursor-pointer">Home</li> */}
				{/* <li className="cursor-pointer">About me</li>
				<li className="cursor-pointer">Activities</li>
				<li className="cursor-pointer">Contact me</li> */}
				<li className="cursor-pointer">Get Resume</li>
			</ul>
		</nav>
	)
}

export default Navbar
