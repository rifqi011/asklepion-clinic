import React from "react"
import HamburgerIcon from "./HamburgerIcon"
import Logo from "./Logo"

export default function Header() {
	return (
		<header className="container left-0 top-0 fixed h-16 flex justify-between items-center bg-white z-40 shadow-lg shadow-gray">
			<Logo />

			<HamburgerIcon isOpen={false} />
		</header>
	)
}
