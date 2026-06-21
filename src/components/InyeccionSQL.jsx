import React from 'react';
// Importamos la imagen directamente desde la carpeta docs
import imgSQLi from '../../docs_pinale/img_pinale/sqli_pinale.png';

const InyeccionSQL = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
      <h2 className="text-3xl font-bold mb-4 text-red-700">1. Inyección SQL (SQLi)</h2>
      <div className="mb-6">
        <p className="text-gray-700 mb-2"><strong>Payload utilizado:</strong> <code className="bg-gray-100 px-2 py-1 rounded">' OR '1'='1</code></p>
        {/* Pasamos la variable importada al atributo src */}
        <img
          src={imgSQLi}
          alt="Evidencia SQLi"
          className="max-h-96 w-auto object-contain border rounded shadow-sm"
        />
      </div>
      <div className="space-y-4 text-gray-700">
        <p><strong>Por qué funciona:</strong> La aplicación concatena directamente la entrada del usuario dentro de la consulta SQL sin sanitizarla. El payload crea una tautología (1=1), saltándose los controles de acceso y exponiendo toda la tabla.</p>
        <p><strong>Puntaje CVSS 3.1:</strong> <span className="font-bold text-red-600">7.5 (Alto)</span> - <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></p>
      </div>
    </div>
  );
};

export default InyeccionSQL;