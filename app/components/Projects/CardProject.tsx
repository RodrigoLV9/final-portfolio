import { AiOutlineGlobal as WebIcon } from "react-icons/ai";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { RiNextjsLine as NextIcon } from "react-icons/ri";
import { FaReact as ReactIcon } from "react-icons/fa";
import { FaCss3 as CssIcon } from "react-icons/fa";
import { SiMongodb as MongoIcon} from "react-icons/si";
export default function CardProject(){
    return(
        <div className="card">
            <div className="image"></div>
            <ul className="tags">
                <li>
                    <NextIcon/>
                    <p>Next</p>
                </li>
                <li>
                    <ReactIcon/>
                    <p>React</p>
                </li>
                <li>
                    <CssIcon/>
                    <p>Css</p>
                </li>
                <li>
                    <MongoIcon/>
                    <p>MongoDB</p>
                </li>
            </ul>
            <h4>Weather App</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur aspernatur atque quo quia molestias officiis quae? Minima perspiciatis libero laboriosam ullam, repellat molestias magni culpa at facilis voluptate hic illo.</p>
            <div className="button">
                <button className="button__demo">
                    <WebIcon/>
                    <p>Demo</p>
                </button>
                <button className="button__github">
                    <GithubIcon/>
                    <p>Github</p>
                </button>
            </div>
        </div>
    )
}