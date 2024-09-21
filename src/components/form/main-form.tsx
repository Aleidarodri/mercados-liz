import { IonButton, IonItem } from "@ionic/react";
import styles from "./main-form.module.css"
import { Send } from "lucide-react";
interface FromProps {
    children?: React.ReactNode;
    jsonForm?: any;
    functionFrom?: string;
    message: string;
}

export function MainForm({ message, functionFrom, children, jsonForm }: FromProps) {
    return (
        <form className={styles["form"]}>
            {children}
            <div>
                <IonButton
                    color="liz"
                    size="small"
                    fill="outline"
                    slot="end"
                    style={{
                        marginTop: "10px",
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}>
                        {message}
                        <Send style={{ fontSize: "16px" }} />
                    </span>
                </IonButton>
            </div>
        </form>
    )
}