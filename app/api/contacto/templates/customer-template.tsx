import * as React from "react";

interface CustomerTemplateProps {
    name: string;
}

export const CustomerTemplate: React.FC<Readonly<CustomerTemplateProps>> = ({
    name,
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
                    textAlign: "center",
                }}
            >
                {/* Logo de LASO */}
                <div style={{ marginBottom: "16px" }}>
                    <img
                        src="https://laso.uy/laso-icon.svg"
                        alt="Logotipo de LASO"
                        style={{ width: "120px", height: "auto" }}
                    />
                </div>

                {/* Encabezado */}
                <h1
                    style={{
                        fontSize: "20px",
                        marginBottom: "16px",
                        color: "#333",
                    }}
                >
                    ¡Gracias por tu mensaje!
                </h1>

                {/* Contenido principal */}
                <p
                    style={{
                        marginBottom: "8px",
                        color: "#444",
                        fontSize: "16px",
                    }}
                >
                    Hola, <strong>{name}</strong>.
                </p>
                <p
                    style={{
                        marginBottom: "8px",
                        color: "#444",
                        fontSize: "16px",
                    }}
                >
                    Agradecemos tu interés en contactarnos. Hemos recibido tu mensaje y en
                    breve uno de nuestros representantes se pondrá en comunicación contigo
                    para brindarte la información que necesitas.
                </p>
                <p
                    style={{
                        marginBottom: "8px",
                        color: "#444",
                        fontSize: "16px",
                    }}
                >
                    Mientras tanto, te invitamos a explorar nuestro sitio web y conocer
                    más sobre los servicios y soluciones que ofrecemos.
                </p>

                {/* Botón / CTA */}
                <div style={{ margin: "20px 0" }}>
                    <a
                        href="https://laso.uy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            backgroundColor: "#0066cc",
                            color: "#fff",
                            padding: "12px 20px",
                            borderRadius: "6px",
                            textDecoration: "none",
                            fontSize: "16px",
                        }}
                    >
                        Visitar nuestro sitio
                    </a>
                </div>

                {/* Despedida */}
                <p style={{ marginBottom: "8px", color: "#444", fontSize: "16px" }}>
                    ¡Muchas gracias por confiar en <strong>LASO</strong>!
                </p>
                <p style={{ marginBottom: "8px", color: "#444", fontSize: "16px" }}>
                    Equipo de <a href="https://laso.uy/">LASO</a>
                </p>
            </div>
        </div>
    );
};
