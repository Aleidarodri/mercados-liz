import Page from "@/template/page";
import "@/pages/margen-pagina.css";
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";
import "@/components/displays/textarea.css";
import styles from "./nuevosprov.module.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { PostArchivos, PostProveedor, renderData } from "@/services/web_site_post";

interface Opcion {
    texto: string;
    tipo: "text" | "password" | "email" | "number" | "select" | "date" | "h1" | "tel" | undefined;
    subopciones?: {
        props?: any;
        texto: string;
        tipo: "text" | "password" | "email" | "number" | "date" | "select" | "tel" | undefined;
        multiple?: boolean;
        values?: any[];
    }[];
    values?: any[];
    multiple?: boolean;
    props?: any;
}

interface Pregunta {
    id: number;
    texto: string;
    opciones: Opcion[];
}

const preguntas: Pregunta[] = [
    {
        id: 1,
        texto: "Datos Generales",
        opciones: [
            { texto: "Información general proveedor", tipo: "h1" },
            {
                texto: "Información",
                tipo: "text",
                subopciones: [
                    { texto: "Nombre", tipo: "text", props: "name" },
                    { texto: "Correo electrónico", tipo: "email", props: "email" },
                ],
            },
            {
                texto: "Compañía",
                tipo: "text",
                subopciones: [
                    { texto: "Telefono", tipo: "text", props: "telefono" },
                    { texto: "Compañía", tipo: "text", props: "company" },
                ],
            },
            { texto: "Tipo de productos", tipo: "text", props: "type_prod" },
            {
                texto: "Departamento al que va dirigido",
                tipo: "text",
                subopciones: [
                    {
                        texto: "Departamento al que va dirigido",
                        tipo: "select",
                        props: "department",
                        values: [
                            //{ nombre: "" },
                            { nombre: "Abarrotes Comestibles" },
                            { nombre: "Frutas y Verduras" },
                            { nombre: "Cuidado Personal" },
                            { nombre: "Carnes" },
                            { nombre: "Mercancías Generales" },
                            { nombre: "Bebidas y Licores" },
                            { nombre: "Lácteos" },
                            { nombre: "Dulcería" },
                            { nombre: "Especies y Condimentos" },
                            { nombre: "Materia Prima" },
                            { nombre: "Articulos de Oficina" },
                            { nombre: "Servicios Generales" },
                            { nombre: "Mascotas" },
                        ]
                    }
                ]
            },
        ],
    },
];

const NuevoProvePage = () => {

    /* Arrastra */
    const [file, setFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };
    const handleRemoveFile = () => {
        setFile(null);
        const input = document.getElementById("fileInput") as HTMLInputElement;
        if (input) {
            input.value = "";
        }
    };
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files.length > 0) {
            setFile(event.dataTransfer.files[0]);
        }
    };
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    /* Arrastra */

    const [paginaActual, setPaginaActual] = useState(0);
    const { register, handleSubmit, setValue, reset } = useForm();

    const preguntaActual = preguntas[paginaActual];
    const esUltimaPagina = paginaActual === preguntas.length - 1;

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        try {
            await PostProveedor(data);
            await PostArchivos(renderData(data.archivo));
            // Mostrar mensaje de éxito
            Swal.fire({
                title: "Gracias, nos pondremos en contact.o", //response.message
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            // Limpiar los campos del formulario
            reset();
        } catch (error) {
            Swal.fire({
                title: "Error al enviar el formulario.",
                text: "Por favor, intente nuevamente.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    });

    return (
        <Page>
            <form onSubmit={onSubmit}>
                <h2 className="titulos" style={{ marginTop: "6rem" }}>
                    Si quieres ser nuestro proveedor llena el siguiente formulario.
                </h2>
                <div className={styles["reclutamiento"]}>
                    {preguntaActual.opciones.map((data: Opcion, index: number) => (
                        <div className={styles["reclutamiento-columnas"]} key={index}>
                            {data.subopciones ? (
                                data.subopciones.map((subdata, subIndex) =>
                                    subdata.tipo === "select" ? (
                                        <Select
                                            key={subIndex}
                                            multiple={subdata.multiple}
                                            values={subdata.values || []}
                                            message={subdata.texto}
                                            onChange={(value: any) => setValue(subdata.props, value)}
                                            props={{ ...register(subdata.props) }}
                                        />
                                    ) : (
                                        <Input
                                            key={subIndex}
                                            label={subdata.texto}
                                            type={subdata.tipo}
                                            props={register(subdata.props)}
                                            placheolder={""}
                                        />
                                    )
                                )
                            ) : data.tipo === "select" ? (
                                <Select
                                    multiple={data.multiple}
                                    values={data.values || []}
                                    message={data.texto}
                                    onChange={(value: any) => setValue(data.props, value)}
                                    props={{ ...register(data.props) }}
                                />
                            ) : data.tipo === "h1" ? (
                                <h1 key={index}>{data.texto}</h1>
                            ) : (
                                <Input
                                    key={index}
                                    label={data.texto}
                                    type={data.tipo}
                                    props={register(data.props)}
                                    placheolder={""}
                                />
                            )}
                        </div>
                    ))}
                    <p className="sub-titulos5">
                        En caso de contar con algún catálogo con sus productos favor de anexarlo.
                    </p>

                    <div
                        className={"drop-zone"}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        {file && (
                            <button type="button" onClick={handleRemoveFile} className={"remove-button"}>
                                ❌
                            </button>)}
                        <input
                            type="file"
                            accept=".pdf,.xlsx"
                            multiple
                            {...register("archivos")}
                            style={{ display: "none" }}
                            id="fileInput"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="fileInput" className={"file-label"}>
                            {file ? file.name : "Haz clic o arrastra un archivo aquí"}
                        </label>
                    </div>

                    {/*   <input type="file" accept=".pdf,.xlsx" multiple {...register("archivos")} /> */}
                    <div style={{ display: "flex" }}>
                        <Button label="Enviar" type="submit" color="default" />
                    </div>
                </div>
            </form>
        </Page>
    );
};

export default NuevoProvePage;
