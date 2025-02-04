export default function SectionTitle({ title, headline, description, children, className, align, sectionId }) {
	return (
		<div className={`flex flex-col gap-6 ${className} ${align === "center" ? "text-center" : "text-left"}`}>
			<div className={`flex flex-col gap-6`}>
				<h2 className={`text-green text-lg bg-lightgreen font-semibold px-3 py-1 rounded-lg ${align === "center" ? "self-center" : "self-start"}`}>{title}</h2>
				<h3 className={`font-medium text-5xl  ${sectionId === "home" ? "md:text-6xl" : " md:text-4xl"}`}>{headline}</h3>
				<p className="text-lg">{description}</p>
			</div>

			{children}
		</div>
	)
}
