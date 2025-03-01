import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaFacebookSquare as FacebookIcon } from "react-icons/fa";
import { SiGmail as GmailIcon } from "react-icons/si";
import { RxDownload as DownloadIcon } from "react-icons/rx";
export default function HeroInfo(){
    return(
        <div className="heroInfo">
            <h1>Hey, i am Rodrigo LV</h1>
            <h2>Fullstack developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cumque? Facere eum porro sed quae quos velit aliquid dolorem! Delectus provident impedit veritatis eveniet facere animi laborum! Recusandae, esse possimus!</p>
            <div className="heroInfo-links">
                <a href="#">
                    <GithubIcon/>
                </a>
                <a href="#">
                    <InstagramIcon/>
                </a>
                <a href="#">
                    <FacebookIcon/>
                </a>
                <a href="#">
                    <GmailIcon/>
                </a>
            </div>
            <button type="button">
                <DownloadIcon/>
                <p>Download CV</p>
            </button>
        </div>
    )
}
