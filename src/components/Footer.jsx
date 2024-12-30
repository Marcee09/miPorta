import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Mi Portafolio</p>
            <div className="social-icons">
                <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://www.instagram.com/tu-instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                <a href="mailto:tu-email@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="social-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;