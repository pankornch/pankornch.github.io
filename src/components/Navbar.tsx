import React, { FC } from "react"

const Navbar: FC = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}
	return (
		<nav className="flex justify-between items-center fixed top-0 left-0 w-screen px-6 sm:px-56 py-6 bg-white shadow-lg z-50 cursor-pointer">
			<h1 className="font-bold text-4xl" onClick={scrollToTop}>
				Pankorn
			</h1>
			<div className="sm:ml-36 ml-0 flex w-full sm:justify-end justify-end">
				<button type="button" className="cursor-pointer px-4 py-2 outline outline-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all active:bg-orange-400" >Get Resume</button>
			</div>
		</nav>
	)
}

export default Navbar
