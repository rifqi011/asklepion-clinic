import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ButtonSecondary from "../components/ButtonSecondary"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Card from "../components/Card"
import Image from "../components/Image"
import { Swiper, SwiperSlide } from "swiper/react"
import DoctorsData from "../data/doctors.json"
import ButtonPrimary from "../components/ButtonPrimary"
export default function Doctors() {
	return (
		<Section id={"doctors"}>
			<SectionTitle title={"Doctors"} className={"md:flex-row md:items-center"} headline={"Choose the doctors that according to you need"} description={"Our dedicated team of professionals is committed to providing personalized care and advanced medical solutions."} sectionId={"doctors"}>
				<ButtonSecondary href={"/"} className={"self-start md:flex-1 md:self-end"}>
					See all <FontAwesomeIcon icon={faArrowRight} />
				</ButtonSecondary>
			</SectionTitle>

			<div className="">
				<Swiper loop={false} slidesPerView={1} spaceBetween={20} grabCursor={true} breakpoints={{ 768: { slidesPerView: 1.5 }, 1024: { slidesPerView: 2.5 } }}>
					{DoctorsData.map((doctor, index) => (
						<SwiperSlide key={index}>
							<Card className="p-0 rounded-[2rem] flex flex-col gap-4">
								<Image src={doctor.image} className={"rounded-[2rem] rounded-br-none rounded-bl-none h-[350px] object-top xl:h-[300px]"} />

								<div className="px-4 flex flex-col gap-4 pt-0 pb-6">
									<p className="text-green font-normal text-xl xl:text-base">{Array.isArray(doctor.services) && doctor.services.length > 1 ? doctor.services.join(" & ") : doctor.services}</p>
									<h4 className="text-2xl">{doctor.name}</h4>
									<p className="text-xl">{doctor.speciality}</p>

									<ButtonPrimary href={"/"} className={"justify-center text-xl font-light xl:text-sm"}>
										Book Appointment
									</ButtonPrimary>
								</div>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Section>
	)
}
