import React from "react"

export default function Logo({className}) {
	return (
		<a href="" className={`text-3xl font-medium text-green flex gap-2 ${className}`}>
			<img src="./src/assets/img/logo/logo-alt.png" className="w-8" alt="Logo" />
			Asklepion
		</a>
	)
}
