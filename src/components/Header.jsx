import React, { useEffect, useState } from "react"
import HamburgerIcon from "./HamburgerIcon"
import Logo from "./Logo"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)

    // scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                if (!hasAnimated) {
                    setScrolled(true)
                    setHasAnimated(true)
                }

            } else {
                setScrolled(false)
                setHasAnimated(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        //un-mount
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [hasAnimated])

	return (
        <header className={`container left-0 top-0 fixed h-16 flex justify-between items-center bg-white z-40 transition-all duration-300 ${scrolled ? " shadow-lg shadow-gray" : ""}`}>
			<Logo />

			<HamburgerIcon isOpen={false} />
		</header>
	)
}
