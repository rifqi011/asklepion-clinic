import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import ButtonPrimary from "../components/ButtonPrimary"
import QualityData from "../data/quality.json"
import Image from "../components/Image"

export default function Quality() {
	return (
		<Section id={"quality"}>
			<SectionTitle title={"Quality"} headline={"Our Performance Quality Care, Made for You"} description={"We understand that each individual has distinct requirements when it comes to their health and well-being."} sectionId={"quality"}>
				<ul className="flex flex-col gap-4">
					{QualityData.map((quality, index) => (
						<li key={index} className="flex gap-2 items-center text-xl">
							<FontAwesomeIcon icon={faCheckCircle} className="text-green" />
							<p>{quality.text}</p>
						</li>
					))}
				</ul>

				<ButtonPrimary href={"/"} className={"self-start px-8 mt-2"}>
					Learn More
				</ButtonPrimary>
			</SectionTitle>

			<div className="flex w-full gap-4">
				<Image src={"./src/assets/img/quality/1.jpg"} alt={"Quality"} className={"aspect-square w-full md:w-1/2"} />
				<Image src={"./src/assets/img/quality/1.jpg"} alt={"Quality"} className={"aspect-square w-1/2 hidden md:block"} />
			</div>
		</Section>
	)
}
