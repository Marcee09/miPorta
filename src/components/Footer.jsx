import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 Mi Portafolio</p>
            <div className="social-icons">
                <a href="https://github.com/Marcee09" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/marcela-herrera-03a6a322a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://www.instagram.com/marceeherrer4" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                <a href="mailto:marcela.ah96@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="social-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;