import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Image from "../components/Image"
import ButtonSecondary from "../components/ButtonSecondary"
import PatnersData from "../data/patners.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/swiper-bundle.css"

export default function Home() {
	return (
		<>
			<Section id={"home"} className={"mt-14 text-center"}>
                <SectionTitle title={"Health Harmony"} align={"center"} headline={"Your Gateway to Optimal Health Solution"} description={"Our platform serves as your gateway to a healthier life, offering personalized guidance, valuable insights, and support for your well-being."} sectionId={"home"} />

				<div className="flex flex-col gap-6 md:flex-row">
					<Image src={"./src/assets/img/hero/1.jpg"} alt={"Hero"} className="hidden lg:block lg:w-[20%]" />

					<Image src={"./src/assets/img/hero/2.jpg"} alt={"Hero"} className={"aspect-16/10 md:aspect-auto md:w-1/2"} />

					<div className="flex flex-col gap-6">
						<Image src={"./src/assets/img/hero/3.jpg"} alt={"Hero"} />

						<div className="bg-green text-white text-left p-4 rounded-2xl flex flex-col gap-2">
							<h4 className="text-2xl xl:text-xl">Find more services</h4>
							<p className="text-lg xl:text-base">One Stop Shop for All Medical Needs for Complete Recovery</p>
							<ButtonSecondary href={"/"} className={"border-none rounded-md self-end xl:text-sm"}>
								Explore Services
							</ButtonSecondary>
						</div>
					</div>
				</div>
			</Section>

			<div className="container overflow-hidden mb-14">
				<Swiper
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
                    }}
                    loop={true}
					modules={[Autoplay]}
                >
                    {PatnersData.map((patner, index) => (
                        <SwiperSlide key={index} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <img src={patner.logo} />
                        </SwiperSlide>
                    ))}
				</Swiper>
			</div>
		</>
	)
}
