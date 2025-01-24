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
            <SectionTitle title={"Doctors"} headline={"Choose the doctors that according to you need"} description={"Our dedicated team of professionals is committed to providing personalized care and advanced medical solutions."}>
                <ButtonSecondary href={"/"} className={"self-start"}>
                    See all <FontAwesomeIcon icon={faArrowRight} />
                </ButtonSecondary>
            </SectionTitle>

            <div className="">
                <Swiper loop={false} slidesPerView={1} spaceBetween={20} grabCursor={true}>
                    {DoctorsData.map((doctor, index) => (
                        <SwiperSlide key={index}>
                            <Card className="p-0 rounded-[2rem] flex flex-col gap-4">
                                <Image src={doctor.image} className={"rounded-[2rem] rounded-br-none rounded-bl-none h-[500px] object-top"} />

                                <div className="px-4 flex flex-col gap-4 pt-0 pb-6">
                                    <p className="text-green font-normal text-xl">
                                        {Array.isArray(doctor.services) && doctor.services.length > 1 ? doctor.services.join(' & ') : doctor.services}
                                    </p>
                                    <h4 className="text-3xl">{doctor.name}</h4>
                                    <p className="text-xl">{doctor.speciality}</p>

                                    <ButtonPrimary href={"/"} className={"justify-center text-xl font-light"}>
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
