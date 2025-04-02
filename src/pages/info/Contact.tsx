import { Mail, MapPin, Phone } from "lucide-react";
import Page from "@/template/page";
import "./HistoriaPage.css";

const ContactPage = () => {
    return (
        <Page>
            <section className="sucursales-container">
                <h1 className="titulos">Nuestras Sucursales</h1>

                <div className="grid-container">

                    {/* Lista de Sucursales */}
                    <div className="sucursales-list">
                        {[
                            {
                                name: "Liz Mayoreo",
                                address: "11 6, Francisco Zarco, 22750 Francisco Zarco, B.C.",
                                phone: "+52 646 596 9489",
                                email: "gerencia01@mercadosliz.com",
                                schedule: [
                                    "Domingo a jueves 7:00 AM - 09:00 PM",
                                    "Viernes y sábado 7:00 AM - 10:00 PM",
                                ],
                            },
                            {
                                name: "Liz Valle de Guadalupe",
                                address: "Calle Principal 216, 22750 Francisco Zarco, B.C.",
                                phone: "+52 646 155 2022",
                                email: "gerencia02@mercadosliz.com",
                                schedule: ["6:00 AM - 11:00 PM"],
                            },
                            {
                                name: "Liz Valle de las Palmas",
                                address: "México 3, Ampliación Valle de las Palmas, 21500 Espuela, B.C.",
                                phone: "+52 646 123 4567",
                                email: "gerencia03@mercadosliz.com",
                                schedule: ["7:00 AM - 10:00 PM"],
                            },
                            {
                                name: "Liz Testerazo",
                                address: "Morelos, 21570 El Testerazo, B.C.",
                                phone: "+52 665 521 7602",
                                email: "gerencia04@mercadosliz.com",
                                schedule: ["7:00 AM - 10:00 PM"],
                            },
                        ].map((sucursal, index) => (
                            <div className="sucursal-card" key={index}>
                                <h2>{sucursal.name}</h2>
                                <div className="contact-item">
                                    <MapPin size={24} color=" #a245b2" />
                                    <span>{sucursal.address}</span>
                                </div>
                                <div className="contact-item">
                                    <Phone size={24} color=" #00a10d" />
                                    <a href={`tel:${sucursal.phone}`} className="phone-link" >{sucursal.phone}</a>
                                </div>
                                {/* <div className="contact-item">
                                    <Phone size={24} color="#00a10d" />
                                    <span>{sucursal.phone}</span>
                                </div> */}
                                <div className="contact-item">
                                    <Mail size={24} color=" #8f51da" />
                                    <span>{sucursal.email}</span>
                                </div>
                                <div className="horarios">
                                    <strong>Horario de Atención:</strong>
                                    {sucursal.schedule.map((hora, i) => (
                                        <div key={i}>
                                            <span>{hora}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Page>
    );
};

export default ContactPage;