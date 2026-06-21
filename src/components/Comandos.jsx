import React from 'react';
import imgComandos from '../../docs_pinale/img_pinale/comandos_pinale.png';

const Comandos = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
      <h2 className="text-3xl font-bold mb-4 text-orange-700">3. Inyección de Comandos</h2>
      <div className="mb-6">
        <p className="text-gray-700 mb-2"><strong>Payload utilizado:</strong> <code className="bg-gray-100 px-2 py-1 rounded">127.0.0.1; cat /etc/passwd</code></p>
        <img
          src={imgComandos}
          alt="Evidencia Command Injection"
          className="max-h-96 w-auto object-contain border rounded shadow-sm"
        />
      </div>
      <div className="space-y-4 text-gray-700">
        <p><strong>Por qué funciona:</strong> La aplicación pasa el input del usuario directamente a un shell del sistema operativo. El punto y coma (;) actúa como separador, permitiendo ejecutar instrucciones maliciosas adicionales.</p>
        <p><strong>Puntaje CVSS 3.1:</strong> <span className="font-bold text-orange-600">10.0 (Crítico)</span> - <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H</code></p>
      </div>
    </div>
  );
};

export default Comandos;