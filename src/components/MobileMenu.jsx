import { useEffect } from 'react'
import NavMenuData from '../data/nav-menu.json'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

export default function MobileMenu({isOpen, closeMenu, menuRef  }) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	return (
		<div ref={menuRef} className={`h-full w-full left-0 top-0 fixed pb-12 pt-20 bg-white flex flex-col justify-between items-center container ease-in z-40 ${isOpen ? "-translate-y-[0%]" : "-translate-y-[120%]"} lg:relative lg:flex-row lg:-translate-y-0 lg:h-full lg:w-auto lg:p-0 lg:gap-8`}>
			<ul className="flex flex-col lg:flex-row lg:gap-4">
				{NavMenuData.map((menu, index) => (
					<li key={index} onClick={closeMenu} className="py-4 font-medium text-xl xl:text-base">
						<a href={menu.href}>{menu.title}</a>
					</li>
				))}
			</ul>

			<div className="flex justify-between items-center gap-4">
				<ButtonSecondary href={"/"} className={"flex-1 rounded-xl text-xl justify-center lg:rounded-3xl lg:px-6 lg:py-1 xl:text-base"}>
					Log in
				</ButtonSecondary>

				<ButtonPrimary href={"/"} className={"flex-1 rounded-xl text-xl justify-center lg:rounded-3xl lg:px-6 lg:py-1 lg:hidden xl:block xl:text-base"}>
					Sign up
				</ButtonPrimary>
			</div>
		</div>
	)
}
