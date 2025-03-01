import HeroInfo from "./HeroInfo"
import HeroImage from "./HeroImage"
export default function Hero(){
    return(
        <section className="hero">
            <HeroInfo/>
            <HeroImage/>
        </section>
    )
}