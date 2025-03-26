import { MainForm } from "@/components/form/main-form";
import { Input } from "@/components/functions/input";
import Page from "@/template/page";
import { Mail, MapPin, Phone } from "lucide-react";
const ContactPage = () => {
    return (
        <Page>
            <section style={{ marginBottom: "3rem" }}>
                <h1 className="titulos" style={{ marginTop: "6rem" }}>Nuestras sucursales</h1>
                <ul className='product'>
                    <li>
                        <MainForm message='Enviar'>
                            <Input label="Nombre(s)" type="text" placheolder="Ingrese sus nombres" />
                            <Input label="Mensaje" type="text" placheolder="Exprese sus dudas..." />
                        </MainForm>
                    </li>
                    <li>
                        <ul>
                            {/* ----------------------------------------------------------- */}
                            <li style={{ background: "rgba(222, 175, 241, 0)", padding: "15px", borderRadius: "5px", marginBottom: "1rem" }}>
                                <h2>Liz Mayoreo</h2>
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span>11 6, Francisco Zarco, 22750 Francisco Zarco, B.C.</span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 646 596 9489</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>gerencia01@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span> <strong>Horario de Atención:{" "} </strong>
                                        <div>
                                            <span style={{ paddingLeft: "5px" }}>Domingo a jueves 7:00 AM - 09:00 PM </span>
                                        </div>
                                        <div>
                                            <span style={{ paddingLeft: "5px" }}>Viernes y sabado 7:00 AM - 10:00 PM </span>
                                        </div>
                                    </span>

                                </div>

                            </li>
                            {/* ----------------------------------------------------------- */}
                            <li style={{ background: "#fff", padding: "15px", borderRadius: "5px", marginBottom: "1rem" }}>
                                <h2>Liz Valle de Guadalupe</h2>
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span>Calle Principal 216, 22750 Francisco Zarco, B.C.</span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 646 155 2022</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>gerencia02@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span><strong>Horario de Atención:{" "}</strong></span>
                                    <span style={{ paddingLeft: "5px" }}>6:00 AM - 11:00 PM</span>
                                </div>
                            </li>
                            {/* ----------------------------------------------------------- */}

                            <ul>
                            </ul>
                            <li style={{ background: " rgba(217, 175, 241, 0)", padding: "15px", borderRadius: "5px", marginBottom: "1rem" }}>
                                <h2>Liz Valle de las Palmas</h2>
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span>México 3, Ampliación Valle de las Palmas, 21500 Espuela, B.C.  </span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 646 123 4567</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>gerencia03@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span><strong>Horario de Atención:{" "}</strong></span>
                                    <span style={{ paddingLeft: "5px" }}>7:00 AM - 10:00 PM</span>
                                </div>
                            </li>
                            {/* ----------------------------------------------------------- */}
                            <li style={{ background: "#fff", padding: "15px", borderRadius: "5px" }}>
                                <h2>Liz Testerazo</h2>
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span> Morelos, 21570 El Testerazo, B.C.</span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 665 521 7602</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>gerencia04@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span><strong>Horario de Atención:{" "}</strong></span>
                                    <span style={{ paddingLeft: "5px" }}>7:00 AM - 10:00 PM</span>
                                </div>

                            </li>
                            {/* ----------------------------------------------------------- */}
                        </ul>
                    </li>
                </ul>

            </section>

        </Page>
    )
}
export default ContactPage;