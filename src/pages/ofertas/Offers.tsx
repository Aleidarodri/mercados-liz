import Page from "@/template/page";
import Styles from "@/pages/ofertas/Offers.module.css";
import OffersCarousel from "./OffersCarousel";
import ComboSection from "./CombosSection";
import PdfViewer from "./PdfViewer";
/* import TarjetaSection from "./tarjetaOferta";
import { IonButton, IonIcon } from "@ionic/react";
import { FileText, ShoppingCart } from "lucide-react"; */
const Offers = () => {
    return (
        <Page /* */>
            <section>
                <OffersCarousel />
            </section>
            {/* PDF Catalog Section */}
            <section className="mb-8">
                <PdfViewer pdfUrl="https://www.google.com" />
            </section>
           {/*  <IonButton  shape="round" fill="clear">
                <ShoppingCart color={" #922abb"} size="2rem" style={{ marginLeft: "auto" }} />
            </IonButton> */}
            <section className="mb-8"/* className={Styles["content"]} */>
                {/*       <div >
                    <h1 className={Styles["p"]} > Ve nuestras promociones del día </h1>
                </div> */}
               {/*  <TarjetaSection /> */}
                 <ul className={Styles["productos"]}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>

            <section className="mb-8">
                <ComboSection />
            </section>
        </Page>
    )
}
export default Offers;



