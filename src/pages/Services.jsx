import { FaCode, FaBrush, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import "./Services.css";

const Services = () => {
    return (
        <section className="services" id="services-section">
            <h2>My Services</h2>
            <div className="services-container">
                <div className="service-item">
                    <FaCode className="service-icon" />
                    <h3>Web Development</h3>
                    <p>I create fast, responsive, and optimized websites for an exceptional user experience.</p>
                </div>
                <div className="service-item">
                    <FaBrush className="service-icon" />
                    <h3>UX/UI Design</h3>
                    <p>I design attractive and functional interfaces that help create an intuitive and enjoyable experience.</p>
                </div>
                <div className="service-item">
                    <FaMobileAlt className="service-icon" />
                    <h3>Mobile Development</h3>
                    <p>I develop mobile applications for iOS and Android platforms with a focus on performance optimization.</p>
                </div>
                <div className="service-item">
                    <FaDatabase className="service-icon" />
                    <h3>Database Management</h3>
                    <p>I design and manage efficient, secure, and scalable databases to support large volumes of information.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
