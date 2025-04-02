import { GetValoracion } from "@/services/web_site_gets";
import { useEffect, useState } from "react";
/* import * as XLSX from "xlsx"; */
import './tablasrh.css';

const InfValoracionPage = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [filterRating, setFilterRating] = useState<string>("");

    useEffect(() => {
        GetValoracion()
            .then((info: any) => {
                console.log("Datos recibidos:", info);
                setData(info.data || []); //envio de datos viejo nuevo
                /* setData((info.data || []).reverse()); //este es una opcion 
                const reversedData = (info.data || []).reverse(); // Invierte el orden
                setData(reversedData);
                setLoading(false); //envio de datos nuevo viejo  este es una segunda opcion*/
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener datos:", err);
                setError("Error al cargar la información.");
                setLoading(false);
            });
    }, []);

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterRating(e.target.value);
        setCurrentPage(1); // Reinicia a la primera página cuando se filtre
    };

    const filteredData = data.filter((item: any) => {
        return filterRating
            ? item.valor === parseInt(filterRating) // Filtra según la calificación (1-5)
            : true;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Función para exportar los datos a Excel   //Instalar  npm install xlsx file-saver
    /*     const exportToExcel = () => {
            const worksheet = XLSX.utils.json_to_sheet(
                data.map(({ comment, valor }) => ({ Comentario: comment, Calificación: valor }))
            );
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Valoraciones");
    
            // Guardar archivo
            const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
            const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
            saveAs(dataBlob, "valoraciones.xlsx");
        };
    */

    if (loading) {
        return <p>Cargando información...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (data.length === 0) {
        return <p>No hay datos disponibles.</p>;
    }

    return (

        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <div className="valtable-container">
                <h2 className="subtitulos" style={{ marginBottom: "1rem", marginTop: "2rem", marginLeft: "1rem" }}>
                    Información nuevas valoraciones
                </h2>

                <button
                    /* onClick={exportToExcel} */
                    style={{
                        margin: "10px",
                        padding: "10px",
                        backgroundColor: " #4CAF50",
                        color: "white",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Exportar a Excel
                </button>

                {/* Campo de entrada para el filtro por calificación */}
                <div style={{ margin: "0.5rem" }}>
                    <label htmlFor="ratingFilter" style={{ padding: "1rem", fontSize: "1rem" }}>Filtrar por Calificación: </label>
                    <input
                        id="ratingFilter"
                        type="text"
                        placeholder="Calificación (1-5)"
                        value={filterRating}
                        onChange={handleRatingChange}
                        className="input-field"
                        style={{
                            fontSize: "0.9rem",
                            padding: "0.1rem",
                            marginBottom: "1rem",
                            marginRight: "1rem",
                            borderRadius: "5px",
                            borderColor: "#e5d9f7",
                        }}
                    />
                </div>

                <table className="valresponsive-table">
                    <thead>
                        <tr className="valfontSize">
                            <th className="vallimrenglones" >Comentario</th>
                            <th >Calificación del 1 al 5 </th>
                        </tr>
                    </thead>
                    <tbody className="valfontSize">
                        {currentData.map((info: any, index) => (
                            <tr key={index}>
                                <td className="vallimrenglones">{info.comment || "N/A"}</td>
                                <td style={{
                                    textAlign: "center"
                                }}>{info.valor || "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Paginado */}
                <div className="pagination">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <span>
                        Página {currentPage} de {totalPages}
                    </span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>

    );
};

export default InfValoracionPage;

