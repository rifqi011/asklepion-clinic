export default function Section({id, className, children}) {
    return (
        <section id={id} className={`container py-14 flex flex-col gap-12 ${className}`}>
            {children}
        </section>
    )
}
