import React from "react"

export default function Image({ src, alt, className }) {
	return <img src={src} alt={alt} className={`rounded-2xl object-cover ${className}`} />
}
