import NavMenuData from '../data/nav-menu.json'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

export default function MobileMenu({isOpen, closeMenu, menuRef  }) {
	return (
		<div ref={menuRef} className={`h-full w-full left-0 top-0 fixed pb-12 pt-20 bg-white flex flex-col justify-between container transition-all duration-500 ease-in z-40 ${isOpen ? "-translate-y-[0%]" : "-translate-y-[120%]"}`}>
			<ul className="flex flex-col">
				{NavMenuData.map((menu, index) => (
					<li key={index} onClick={closeMenu} className="py-4 font-medium text-xl">
						<a href={menu.href}>{menu.title}</a>
					</li>
				))}
			</ul>

			<div className="flex justify-between items-center gap-4">
				<ButtonSecondary href={"/"} className={"flex-1 rounded-xl text-xl justify-center"}>
					Log in
				</ButtonSecondary>

				<ButtonPrimary href={"/"} className={"flex-1 rounded-xl text-xl justify-center"}>
					Sign up
				</ButtonPrimary>
			</div>
		</div>
	)
}
