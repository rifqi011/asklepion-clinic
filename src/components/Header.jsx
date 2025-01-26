import { useEffect, useRef, useState } from "react"
import HamburgerIcon from "./HamburgerIcon"
import Logo from "./Logo"
import NavMenuData from "../data/nav-menu.json"
import ButtonSecondary from "./ButtonSecondary"
import ButtonPrimary from "./ButtonPrimary"
import MobileMenu from "./MobileMenu"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const buttonRef = useRef(null)

    // Scroll animation
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Navigation menu
    const toggleMenu = () => setMenuOpen((prev) => !prev)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setMenuOpen(false)
            }
        }
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [menuOpen])

	return (
		<header className={`container left-0 top-0 fixed h-16 flex justify-between items-center bg-white z-40 transition-all duration-300 ${scrolled ? " shadow-lg shadow-gray" : ""}`}>
			<Logo className={"z-50"} />

            <MobileMenu isOpen={menuOpen} closeMenu={toggleMenu} menuRef={buttonRef} />

			<button onClick={toggleMenu} ref={buttonRef} className="z-50 lg:hidden">
				<HamburgerIcon isOpen={menuOpen} />
			</button>
		</header>
	)
}
