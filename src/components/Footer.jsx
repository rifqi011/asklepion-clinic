import { faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import FooterMenu from '../data/footer-menu.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './Logo'

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()

	return (
		<footer className="w-full bg-white flex flex-col container py-10 gap-8 mt-10">
			<div className="flex flex-col justify-between gap-8">
				{/* footer content */}
				<div className="flex flex-col gap-6 flex-1">
                    <Logo />
                    
					<p>Experience personalized healthcare from the comfort of your home with our advanced telemedicine services.</p>

					{/* social media */}
					<div className="flex gap-4 text-xl">
						<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
						<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-teal-800">
							<FontAwesomeIcon icon={faWhatsapp} />
						</a>
					</div>
				</div>

				{/* footer menu */}
				<div className="flex flex-col gap-6 flex-1 md:flex-row md:justify-between">
					{FooterMenu.map((menu, index) => (
						<div key={index} className="flex flex-col gap-3">
							<h4 className="text-lg font-medium">{menu.title}</h4>
							<ul className="flex flex-col gap-2">
								{menu.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a href="">{link}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<hr />

			<div className="">
				<p className="text-lg">&copy; Asklepion, {year} All right reserved.</p>
			</div>
		</footer>
	)
}
