import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Image from "../components/Image"
import AboutData from "../data/about-data.json"
import Card from "../components/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

export default function AboutUs() {
	return (
		<Section id={"about-us"}>
			<div className="relative">
				<Image src={"./src/assets/img/about/1.jpg"} className={"aspect-square"} alt={"About Us"} />
				<Card className={"absolute bottom-2 left-2 w-[80%] rounded-lg"}>
					<h5 className="text-xl font-medium">30 Years of experience</h5>
					<p>We have been serving the comunity eith excellence and compassion for 30 years</p>
				</Card>
			</div>

			<SectionTitle title={"About Us"} align={"left"} headline={"We Provide Quality Care for Your Health"} description={"We are committed to delivering exceptional healthcare services to prioritize your well-being with our experienced professionals strive to create an environment that fosters healing and promotes a healthy lifestyle."} />

			<div className="overflow-hidden w-full">
				<Swiper loop={false} slidesPerView={1.7} spaceBetween={20}>
					{AboutData.map((about, index) => (
						<SwiperSlide key={index} className="w-52">
							<Card className="text-center">
								<h4 className="text-4xl text-green">{about.value}</h4>
								<p>{about.text}</p>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Section>
	)
}
