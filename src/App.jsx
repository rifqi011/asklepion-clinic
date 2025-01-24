import Header from "./components/Header"
import AboutUs from "./sections/AboutUs"
import Doctors from "./sections/Doctors"
import Home from "./sections/Home"
import WhyChooseUs from "./sections/WhyChooseUs"

export default function App() {
	return (
		<>
			<Header />

			<Home />

            <AboutUs />
            
            <WhyChooseUs />

            <Doctors />
		</>
	)
}
