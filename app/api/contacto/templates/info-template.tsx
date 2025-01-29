import * as React from "react";

interface InfoTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const InfoTemplate: React.FC<Readonly<InfoTemplateProps>> = ({
    name,
    email,
    message,
}) => {
    return (
        <div
            style={{
                backgroundColor: "#f9f9f9",
                margin: 0,
                padding: "20px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Contenedor principal con ancho máximo */}
            <div
                style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    padding: "20px",
                    border: "1px solid #eee",
                }}
            >
                <h1
                    style={{
                        fontSize: "24px",
                        marginBottom: "16px",
                        color: "#333",
                        textAlign: "center",
                    }}
                >
                    Nuevo mensaje de contacto
                </h1>

                <p style={{ marginBottom: "8px", color: "#444" }}>
                    <strong>Nombre:</strong> {name}
                </p>
                <p style={{ marginBottom: "8px", color: "#444" }}>
                    <strong>Correo electrónico:</strong>{" "}
                    <a
                        href={`mailto:${email}`}
                        style={{
                            color: "#0066cc",
                            textDecoration: "none",
                        }}
                    >
                        {email}
                    </a>
                </p>
                <p style={{ marginBottom: "8px", color: "#444" }}>
                    <strong>Mensaje:</strong>
                </p>
                <p style={{ marginBottom: "8px", color: "#444" }}>{message}</p>
            </div>
        </div>
    );
};
