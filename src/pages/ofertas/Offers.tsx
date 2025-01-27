import Page from "@/template/page";
import Styles from "@/pages/ofertas/Offers.module.css";
import OffersCarousel from "./OffersCarousel";
import ComboSection from "./CombosSection";
import PdfViewer from "./PdfViewer";

const Offers = () => {
    return (
        <Page /* */>
            <section>
                <OffersCarousel />
            </section>
            {/* PDF Catalog Section */}
            <section className="mb-8">
                <PdfViewer pdfUrl="https://www.google.com/imghp?hl=es-419&ogbl" />
            </section>

            <section className={Styles["content"]}>
                <div >
                    <h1 className={Styles["p"]} > Ve nuestras Promociones del dia</h1>

                </div>
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



