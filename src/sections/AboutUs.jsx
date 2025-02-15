import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Image from "../components/Image"
import AboutData from "../data/about-data.json"
import Card from "../components/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

export default function AboutUs() {
	return (
		<Section id={"about-us"} className="xl:flex-row xl:items-center xl:gap-10">
			{/* Gambar */}
			<div className="relative xl:w-[40%]">
				<Image src={"./src/assets/img/about/1.jpg"} className={"aspect-square md:aspect-auto xl:aspect-square w-full h-full"} alt={"About Us"} />
				<Card className={"absolute bottom-2 left-2 w-[80%] rounded-lg"}>
					<h5 className="text-xl font-medium">30 Years of experience</h5>
					<p>We have been serving the community with excellence and compassion for 30 years</p>
				</Card>
			</div>

			<div className="xl:w-[60%] flex flex-col gap-6 justify-between h-full">
				<SectionTitle title={"About Us"} align={"left"} headline={"We Provide Quality Care for Your Health"} description={"We are committed to delivering exceptional healthcare services to prioritize your well-being. Our experienced professionals strive to create an environment that fosters healing and promotes a healthy lifestyle."} sectionId={"about-us"} />

				<div className="overflow-hidden w-full">
					<Swiper loop={false} slidesPerView={1.7} spaceBetween={20} breakpoints={{ 768: { slidesPerView: 3 } }}>
						{AboutData.map((about, index) => (
							<SwiperSlide key={index} className="w-52">
								<Card className="text-center">
									<h4 className="text-4xl text-green xl:text-3xl">{about.value}</h4>
									<p>{about.text}</p>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</Section>
	)
}
