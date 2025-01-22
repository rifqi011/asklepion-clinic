export default function SectionTitle({ title, headline, description, children, className, align }) {
	return (
		<>
            <div className={`flex flex-col gap-6 ${className} ${align === "center" ? "text-center" : "text-left"}`}>
                <h2 className={`text-green text-lg bg-lightgreen font-semibold px-3 py-1 rounded-lg ${align === "center" ? "self-center" : "self-start"}`}>{title}</h2>
				<h3 className="text-5xl font-medium">{headline}</h3>
				<p className="text-lg">{description}</p>
            </div>
            
			{children}
		</>
	)
}
