export default function Card({ children, className }) {
	return <div className={`bg-white border-black/10 border-2 shadow-md p-4 rounded-2xl ${className}`}>{children}</div>
}
