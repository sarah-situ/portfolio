import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";



export default function Header(){
    return (
        <header>
            <nav><h1>
            <a href="https://github.com/sarah-situ" ><FaGithub  className="icons" size="1.5em"/></a>
            <a href="https://www.linkedin.com/in/sarah-situ-b74358299/" ><FaLinkedin className="icons" size="1.5em"/></a>
       <a href="mailto:sarahsitu563@gmail.com" ><GoMail className="icons"size="1.5em"/></a>
        </h1>
       
                <ul>
                  <li><a href="#home" className="nav-link">Home</a></li>
                  <li><a href="#about" className="nav-link">About</a></li>
                  <li><a href="#projects" className="nav-link">Projects</a></li>
                  <li><a href="#Contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
} 