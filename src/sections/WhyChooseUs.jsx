import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import { faBell, faClipboardCheck, faComments, faFlask, faHeart, faHotel } from "@fortawesome/free-solid-svg-icons"
import WhyChooseUsData from "../data/why-choose-us.json"
import Card from "../components/Card"

export default function WhyChooseUs() {
	const iconMap = {
		faBell: faBell,
		faClipboardCheck: faClipboardCheck,
		faComments: faComments,
		faFlask: faFlask,
		faHeart: faHeart,
		faHotel: faHotel,
	}

	return (
		<Section id={"why-choose-us"}>
			<SectionTitle title={"Why Choose Us"} align={"center"} headline={"Treatment avialable for you"} description={"Our dedicated team of professionals is committed to providing personalized care medical solutions."} sectionId={"why-choose-us"} />

			<div className="grid grid-cols-1 gap-6">
				{WhyChooseUsData.map((data, index) => (
                    <Card key={index} className={"flex flex-col gap-3 flex-1 h-full"}>
                        <FontAwesomeIcon icon={iconMap[data.icon]} className="bg-lightgreen text-green text-xl p-4 rounded-full self-start" />
                        <h3 className="font-medium text-xl">{data.text}</h3>
                        <p>{data.description}</p>
                    </Card>
				))}
			</div>
		</Section>
	)
}
