import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { arrowDownCircleOutline, pricetagsOutline } from 'ionicons/icons';
import Styles from "@/pages/ofertas/Offers.module.css";

interface PdfViewerProps {
    pdfUrl: string;
    fileName?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, fileName = "document.pdf" }) => {
    const handleViewPdf = () => {
        window.open(pdfUrl, '');
    };

    const handleDownloadPdf = () => {
        const link = document.createElement('a'); // Crear un elemento <a>
        link.href = pdfUrl; // Establecer la URL del PDF
        link.download = fileName; // Establecer el nombre del archivo descargado
        link.click(); // Simular un clic en el enlace
    };

    return (
        <div /* className={Styles["pdfdiv"]} */>
            <div className={Styles["div2"]}>
                <h2 className={Styles["h3"]}> {/* */}
                    Descuentos en carnes, lácteos, limpieza y más
                </h2>
                <div className={Styles["divbo"]} style={{ paddingBottom: "1rem" }}>
                    <IonButton
                        color={"liz"}
                        onClick={handleViewPdf}
                        className={Styles["botton"]}
                    >
                        <IonIcon icon={pricetagsOutline}
                            slot="start" style={{ margin: ".3rem" }} />
                        Ofertas
                    </IonButton>

                    <IonButton
                        fill="outline"
                        color={"liz"}
                        onClick={handleDownloadPdf}
                        className={Styles["botton"]} >
                        <IonIcon icon={arrowDownCircleOutline} slot="start" />
                        Descargar ofertas
                    </IonButton>
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;