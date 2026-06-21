import React from 'react';
import imgXSS from '../../docs_pinale/img_pinale/xss_pinale.png';

const XSS = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-500">
      <h2 className="text-3xl font-bold mb-4 text-yellow-700">2. Cross-Site Scripting (XSS Reflejado)</h2>
      <div className="mb-6">
        <p className="text-gray-700 mb-2"><strong>Payload utilizado:</strong> <code className="bg-gray-100 px-2 py-1 rounded">&lt;script&gt;alert('XSS')&lt;/script&gt;</code></p>
        <img
          src={imgXSS}
          alt="Evidencia XSS"
          className="max-h-96 w-auto object-contain border rounded shadow-sm"
        />
      </div>
      <div className="space-y-4 text-gray-700">
        <p><strong>Por qué funciona:</strong> El servidor incluye datos proporcionados por el usuario directamente en la respuesta HTML sin codificación previa. El navegador de la víctima ejecuta el script asumiendo que es legítimo.</p>
        <p><strong>Puntaje CVSS 3.1:</strong> <span className="font-bold text-yellow-600">6.1 (Medio)</span> - <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</code></p>
      </div>
    </div>
  );
};

export default XSS;