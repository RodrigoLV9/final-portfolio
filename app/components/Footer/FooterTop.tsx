import { RiNextjsLine as NextIcon } from "react-icons/ri";
import { FaReact as ReactIcon } from "react-icons/fa";
import { FaCss3 as CssIcon } from "react-icons/fa";
export default function FooterTop(){
    return(
        <section className="footerTop">
            <div className="left">
                <div className="left__logo"></div>
                <p>Todo gran proyecto comienza con un sueño</p>
            </div>
            <div className="right">
                <div className="right__item">
                    <p>Navegacion</p>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="right__item">
                    <p>Redes Sociales</p>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Tiktok</a></li>
                    </ul>
                </div>
                <div className="right__item">
                    <p>Creado con:</p>
                    <ul>
                        <li>
                            <NextIcon/>
                            <p>NextJS</p>
                        </li>
                        <li>
                            <ReactIcon/>
                            <p>React</p>
                        </li>
                        <li>
                            <CssIcon/>
                            <p>Css</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}