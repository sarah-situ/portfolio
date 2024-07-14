import { FaLinkedin } from "react-icons/fa6";

export default function Header(){
    return (
        <header>
            <nav><h1>
            Sarah Situ<FaLinkedin />
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