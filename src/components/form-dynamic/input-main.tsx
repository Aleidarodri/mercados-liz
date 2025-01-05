import { IonInput} from "@ionic/react";
import styles from "@/components/functions/input.module.css";
import { useEffect } from "react";

interface InputProps {
    cuestion: {
        id: number;
        name: string;
        placeholder: string;
        require: boolean;
        type: string; // Tipo de entrada (e.g., text, number, select, etc.)
        multiple?: boolean; // Nuevo campo para selects múltiples
        values?: { nombre: string }[]; // Valores para selects
        valueDefined?: string | string[];
        props?: any;
    };
    register: (name: string, options: { required: string | boolean }) => any;
    setValue: (name: string, value: string | string[]) => void;
    setError: (name: string, error: {}) => void;
    errors: Record<string, { message?: string }>;
}

export function InputDynamic(props: InputProps) {
    const { cuestion } = props;
    const handleInputChange = (event: CustomEvent) => {
        const value = event.detail.value || "";
        props.setError(cuestion.name, {}); // Limpiar errores
        props.setValue(cuestion.name, value);
    };
    const handleSelectChange = (event: CustomEvent) => {
        const value = event.detail.value;
        props.setError(cuestion.name, {}); // Limpiar errores
        props.setValue(cuestion.name, value);
    };
    useEffect(() => {
        if (cuestion.valueDefined) {
            props.setValue(cuestion.name, cuestion.valueDefined);
        }
    }, [cuestion.valueDefined, props, cuestion.name]);

    return (
        <div
            className={`${styles["input-container"]} ${props.errors[cuestion.name] ? styles["input-error"] : ""
                }`}
        >
            <IonInput
                type={cuestion.type.toLowerCase() || "text"}
                label={cuestion.placeholder}
                onIonInput={handleInputChange}
                labelPlacement="floating"
                className={styles["use-input"]}
                {...props.register(cuestion.name, {
                    required: cuestion.require ? "The field is required." : false,
                })}
            />
            {props.errors[cuestion.name]?.message && (
                <div className={styles["error-message"]}>
                    <span>{props.errors[cuestion.name].message}</span>
                </div>
            )}
        </div>
    );
}
