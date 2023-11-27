import TopImage from "../components/TopImage"
import { Link } from "react-router-dom"
import "./HomeStyle.css"
export default function Home() {
    return (<div className="hero">
        <TopImage route="home"/>
        <div className="hero-text">
            <p>They say puppy &gt; kid.</p>
            <p>You know what is even better?</p>
            <h1>Capybara</h1>
            <div className="buttonContainer">
            <Link to="/capybaras" className="btn">Adopt One</Link>
            <Link to="/contact_us" className="btn btn-light">Reach Us</Link></div>
        </div>
    </div>)
}