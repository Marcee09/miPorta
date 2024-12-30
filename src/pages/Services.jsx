import { FaCode, FaBrush, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import "./Services.css";

const Services = () => {
    return (
        <section className="services" id="services-section">
            <h2>Mis Servicios</h2>
            <div className="services-container">
                <div className="service-item">
                    <FaCode className="service-icon" />
                    <h3>Desarrollo Web</h3>
                    <p>Creo sitios web rápidos, responsivos y optimizados para una experiencia de usuario excepcional.</p>
                </div>
                <div className="service-item">
                    <FaBrush className="service-icon" />
                    <h3>Diseño UX/UI</h3>
                    <p>Diseño interfaces atractivas y funcionales que ayudan a crear una experiencia intuitiva y agradable.</p>
                </div>
                <div className="service-item">
                    <FaMobileAlt className="service-icon" />
                    <h3>Desarrollo Móvil</h3>
                    <p>Desarrollo aplicaciones móviles para plataformas iOS y Android con un enfoque en la optimización de rendimiento.</p>
                </div>
                <div className="service-item">
                    <FaDatabase className="service-icon" />
                    <h3>Base de Datos</h3>
                    <p>Diseño y gestión de bases de datos eficientes, seguras y escalables para soportar grandes volúmenes de información.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;