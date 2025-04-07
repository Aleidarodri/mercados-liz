import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, } from '@ionic/react';
import { ShoppingBasket, Timer } from 'lucide-react';
import Styles from "@/pages/ofertas/Offers.module.css";

const tarjeta = [
    {
        id: 3,
        name: 'Platano ',
        price: '$19.90',
        originalPrice: '$24.70',
        validUntil: 'Válido solo sábado y domingo',
        imageUrl: 'https://www.millerchemical.com/es/wp-content/uploads/sites/2/2021/03/iStock-1184345169.png'
    },
    {
        id: 4,
        name: 'Combo Pandita',
        price: '$433.47',
        originalPrice: '$476.81',
        validUntil: 'Válido solo sábado y domingo',
        imageUrl: 'https://media.istockphoto.com/id/1195743934/es/vector/lindo-dise%C3%B1o-vectorial-de-car%C3%A1cter-panda.jpg?s=612x612&w=0&k=20&c=0CS46nLvvKoLpxo6tv68IxKBR7GEHXV-hq26PnBnNuY='
    },
    {
        id: 5,
        name: 'Papel Suavel 4rollos ',
        price: '$26.90',
        originalPrice: '$30.10',
        validUntil: 'Válido solo sábado y domingo',
        imageUrl: 'https://res.cloudinary.com/oita/image/upload/w_656,h_656,c_limit,q_auto,f_auto/v1688057419/Merco/Parte%205/7501943457911_HIGI%C3%89NICO_SUAVEL_C4_ayfvyj.png'
    },
    {
        id: 6,
        name: 'Pollo en piezas ',
        price: '$455.59',
        originalPrice: '$501.14',
        validUntil: 'Válido solo sábado y domingo',
        imageUrl: 'https://i0.wp.com/bachoco.com/wp-content/uploads/2019/08/charola-muslos-600x600-1.png?fit=600%2C600&ssl=1'
    },
];

const TarjetaSection: React.FC = () => {
    return (
        <div>
            <p className={Styles["p"]}> ¡ Nuestras Ofertas del dia ! </p>
            <div className={Styles["divcomt"]}>
                {tarjeta.map((combo) => (
                    <IonCard key={combo.id} className={Styles["cardcomt"]}>
                        <IonCardHeader>
                            <div className={Styles["cardheadert"]}>
                                <div>
                                    <IonCardTitle className={Styles["divheadert"]}>{combo.name}</IonCardTitle>
                                    <div className={Styles["divheadert"]}>
                                        <span className={Styles["spanpret"]}>{combo.price}</span>
                                        <span className={Styles["spanpreOrit"]}>{combo.originalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className={Styles["divcardt"]}>
                                <div className={Styles["contenedor-img"]}>
                                    <img
                                        src={combo.imageUrl}
                                        className={Styles["imgt"]
                                        }
                                    />
                                </div>

                                <div className={Styles["divcomb2t"]}>
                                    <div className={Styles["divcombo2t"]}>
                                        <Timer />
                                        <span>{combo.validUntil}</span>
                                    </div>
                                </div>
                            </div>
                        </IonCardContent>
                    </IonCard>
                ))}
            </div>
        </div>
    );
};

export default TarjetaSection;